// Configuração do Firebase de teste (você pode trocar depois)
const firebaseConfig = {
  apiKey: "AIzaSyBxbCmQe-lKHEsUXdkphtyVu0d9gTeMNcA",
  authDomain: "cauan-tech-feedback.firebaseapp.com",
  databaseURL: "https://cauan-tech-feedback-default-rtdb.firebaseio.com",
  projectId: "cauan-tech-feedback",
  storageBucket: "cauan-tech-feedback.appspot.com",
  messagingSenderId: "309129062012",
  appId: "1:309129062012:web:f27aef6d80c46261bb6b5c"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const nota = document.getElementById("nota").value;
  const atendimento = document.getElementById("atendimento").value;
  const comentario = document.getElementById("comentario").value;

  database.ref("feedbacks").push({
    nome,
    nota,
    atendimento,
    comentario,
    data: new Date().toISOString()
  });

  document.getElementById("mensagem").textContent = "Obrigado pelo seu feedback!";
  document.getElementById("feedbackForm").reset();
});
// Importa os módulos do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configuração do Firebase (a sua)
const firebaseConfig = {
  apiKey: "AIzaSyCNub5uLs6PV1CrElsBjtF9YgKcJnGGMMs",
  authDomain: "pesquisacauantech.firebaseapp.com",
  projectId: "pesquisacauantech",
  storageBucket: "pesquisacauantech.firebasestorage.app",
  messagingSenderId: "1034916266441",
  appId: "1:1034916266441:web:f9c71ba912bb7c3694a818"
};

// Inicializa Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para enviar os dados do formulário
document.getElementById("form-feedback").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const nota = document.getElementById("nota").value;
  const comentario = document.getElementById("comentario").value;

  try {
    await addDoc(collection(db, "feedbacks"), {
      nome,
      nota,
      comentario,
      data: new Date().toISOString()
    });

    alert("Feedback enviado com sucesso!");
    document.getElementById("form-feedback").reset();
  } catch (error) {
    alert("Erro ao enviar feedback: " + error.message);
  }
});
