import { auth, db } from "/includes/fireBaseConfig.js";  // Importa a configuração do Firebase
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { collection, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { verifyUserLogged, searchUserId } from "/includes/fireBaseMethods.js"

async function searchCreated() {
    //Abaixo, váriaveis que eu utilizo para pegar o usuário logado atual
    let user = await searchUserId()
    let type = "mine";

    //Adentro a collection de sessoes_rpg
    let buscaRpgs = collection(db, "sessoes_rpg")
    //Crio a query de consulta
    let rpgQuery = query(buscaRpgs, where("mestre_sessao", "==", user))
    //Crio a var snapshot com um await. chamando a função de getDocs
    //GetDocs:Pega todos os documentos do parametro indicado => rpgQuery
    let querySnapshot = await getDocs(rpgQuery);

    let html = '';

    //Chama a função que cria os cards e insere eles dentro da div
    buildCardSession(querySnapshot, type = "mine");
}

function excluir(codigo) {
    Swal.fire({
        icon: "info",
        title: "Exclusão",
        text: "Tem certeza que deseja excluir essa sessão?",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            try {
                deleteDoc(doc(db, "sessoes_rpg", codigo));
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Sessão excluída com sucesso!',
                    icon: 'success',
                })
                $(`#${codigo}`).remove();

            } catch (error) {
                Swal.fire({
                    title: 'Ops...',
                    text: 'Ocorreu um imprevisto ao excluir a sessão...',
                    icon: 'error',
                })
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            return;
        }
    });

}

function editar(codigo) {

}

function buildCardSession(documents, type) {
    let html = ""
    //Como a resposta snapShot vem uma array imensa com muitos dados, faço um foreach
    documents.forEach((doc) => {
        //Dentro do snapshot, Faço algumas identificacoes 
        html += `
                        <div class="card estiloCard text-light p-2" id="${doc.id}">
                            <img class="imgBorder" src="${doc.data().img_sessao}" alt="">
                            <div class=" text-center p-1">${doc.data().nome_sessao}</div>
                            <div class="toolsBtns mt-2 pb-2 d-flex justify-content-end gap-2">
                                <button class="btn btn-sm btnEditar" data-id="${doc.id}"><i class="fa fa-edit"></i></button>
                                <button class="btn btn-sm btnExcluir" data-id="${doc.id}"><i class="fa fa-trash"></i></button>
                            </div>
                        </div>
                `
    });
    if (type == "participating") {
        $("#otherSessions").append(html);
    } else {
        $("#mySessions").append(html);
    }
}




$(document).ready(function () {
    let text = "Buscando sessões..."
    loader(true, text)
    // verifyUserLogged()
    setTimeout(() => {
        searchCreated()
        loader(false, text = "Buscando sessões...")
    }, 1000);

    $(document).on("click", ".btnExcluir", function () {
        let id = $(this).attr('data-id')
        excluir(id);
    })

    $(document).on("click", ".btnAdicionar", function () {
        redirectNovoRpg();
    })
})