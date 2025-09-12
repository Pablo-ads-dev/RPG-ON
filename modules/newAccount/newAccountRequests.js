import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";  // Adiciona a importação do Auth
import { firebaseConfig, db, app, analytics, auth } from "/includes/fireBaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

async function authenticateCredentials(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Usuário criado com sucesso
            const user = userCredential.user;
            loader(true, "Acessando Menu");
            Swal.fire({
                icon: "success",
                title: "Sucesso",
                text: "Conta criada com sucesso"
            });

            // Aguarda a criação das credenciais
            const credenciaisCriadas = await criarCredenciais(email);
            if (!credenciaisCriadas) {
                Swal.fire({
                    title: "Informação",
                    text: "Algumas informações não foram adicionadas \nVerifique o painel de configurações mais tarde",
                    icon: "info"
                });
            }

            // Redireciona após sucesso
            setTimeout(() => {
                window.location.href = "/modules/login/index.html";
            }, 2000);
        })
        .catch((error) => {
            // Tratamento de erro
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire({
                    title: "Informação",
                    text: 'E-mail já está em uso.',
                    icon: 'info',
                });
            } else {
                Swal.fire({
                    title: "Erro",
                    text: 'Não foi possível cadastrar as credenciais.',
                    icon: 'error',
                });
            }
            loader(false);
        });
}

async function criarCredenciais(email) {
    const userName = $("#nameUser").val();
    try {
        // Adiciona um novo documento com um ID único
        await addDoc(collection(db, "usuarios"), {
            usuario_email: String(email),
            usuario_nome: String(userName),
            usuario_tipo: 2
        });
        return true; // Retorna true em caso de sucesso
    } catch (error) {
        console.error("Erro ao criar credenciais:", error);
        return false; // Retorna false em caso de erro
    }
}

