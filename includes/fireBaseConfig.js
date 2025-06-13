// Importa as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";  // Adiciona a importação do Firestore
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";  // Adiciona a importação do Auth

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDotWLT6IYp41p7KEY0FAB8C-cf6mZwfeg",
    authDomain: "rpgdatabase-6826b.firebaseapp.com",
    projectId: "rpgdatabase-6826b",
    storageBucket: "rpgdatabase-6826b.firebasestorage.app",
    messagingSenderId: "959113940186",
    appId: "1:959113940186:web:d98deb2faec131170ca9e3",
    measurementId: "G-29ZPVMEHZ1"
};

// Inicializa o Firebase com a configuração fornecida
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Analytics
const analytics = getAnalytics(app);

// Instância o Firestore e o Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Exporta as instâncias e a configuração para outros módulos
export { firebaseConfig, db, app, analytics, auth  };
