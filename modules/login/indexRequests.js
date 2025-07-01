// Importa as funções necessárias do Firebase
import { auth, db } from "/includes/fireBaseConfig.js";  // Importa a configuração do Firebase
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";  // Importa a função de autenticação
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Inicializa o Firestore

// Ação do botão de login

function verificarCampos(email, senha) {
    if (!email) {
        Swal.fire({
            title: 'Informação!',
            text: 'Preencha o campo "Usuario"!!',
            icon: 'info',
        });
        loader(false)
        return false;
    }
    if (!senha) {
        Swal.fire({
            title: 'Informação!',
            text: 'Preencha o campo "Senha"!!',
            icon: 'info',
        });
        $("#loader").addClass("loader-hidden");
        loader(false)
        return false;
    }
    return true
}


async function verificarUsuarioTipo(user) {
    console.log(user.email);
    const usuariosRef = collection(db, "usuarios");

    // Cria uma consulta para verificar se o usuário existe
    const usuariosQuery = query(
        usuariosRef,
        where("usuario_email", "==", user.email)
    );

    const querySnapshot = await getDocs(usuariosQuery);

    if (querySnapshot.empty) {
        console.log("Nenhum documento encontrado.");
    } else {
        console.log("Documentos encontrados:", querySnapshot.size);
    }
}

//email teste: regigigaspower2@gmail.com

async function login() {
    let text = "Aguarde"
    loader(true, text)

    let emailInput = $('#email').val().trim();
    let senhaInput = $('#password').val().trim();

    // Verifica se os campos estão preenchidos
    if (verificarCampos(emailInput, senhaInput) == false) {
        return;
    };

    try {
        // Tentativa de login com Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, emailInput, senhaInput)
        // Se o login for bem-sucedido, realiza a ação desejada
        if (userCredential.user) {
            verificarUsuarioTipo(userCredential.user);
            window.location.href = "/modules/inicio/inicio.html";
            setTimeout(() => {
                loader(false)
            }, 1500);
        }

    } catch (error) {
        // Exibe um erro caso o login falhe
        Swal.fire({
            title: 'Email ou senha incorretos',
            icon: 'error',
        });
        loader(false, text)
        console.log(error);
    }
}

$(document).ready(function () {

    $('#btnConfirmar').on('click', function (e) {
        e.preventDefault();
        login()
    });

    $(document).on('keydown', "#btnConfirmar", function (e) {
        if (e.key === "Enter") {
            e.preventDefault(); // Evita submissão do formulário ou outros comportamentos padrão
            login();
        }
    });
});
