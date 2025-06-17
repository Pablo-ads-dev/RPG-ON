import { auth, db } from "/includes/fireBaseConfig.js";  // Importa a configuração do Firebase
import { collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { verifyUserLogged, searchUserId } from "/includes/fireBaseMethods.js"


async function criaSessaoRpg(dados) {
    let user = await searchUserId()
    let status = "ativo";
    try {
        let query = await addDoc(collection(db, 'sessoes_rpg'), {
            img_sessao: dados.urlImg,
            mestre_sessao: String(user),
            nome_sessao: String(dados.nomeSessao),
            tipo_sessao: String(dados.genero),
            status_sessao: String(status)
        })
        if (query) {
            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Sucesso ao criar a sessão!",
                showCancelButton: true,
                confirmButtonText: "Início",
                cancelButtonText: "Outra Sessão",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    redirectInicio();
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    $("#formNovoRpg")[0].reset();
                }
            });
        }

    } catch {
        Swal.fire({
            icon: "Error",
            text: "Algo deu errado durante a criação da sessão",
            title: "Ops..."
        })
    }
}
$(document).ready(function () {
    $(document).on("submit", "#formNovoRpg", function (e) {
        e.preventDefault();
        let dados = $(this).serialize();
        let queryString = dados;
        let obj = Object.fromEntries(new URLSearchParams(queryString));
        criaSessaoRpg(obj)
    })
})