// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCNub5uLs6PV1CrElsBjtF9YgKcJnGGMMs",
  authDomain: "pesquisacauantech.firebaseapp.com",
  projectId: "pesquisacauantech",
  storageBucket: "pesquisacauantech.appspot.com",
  messagingSenderId: "1034916266441",
  appId: "1:1034916266441:web:f9c71ba912bb7c3694a818"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Evento de envio do formulário
document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const nota = document.getElementById("nota").value.trim();
  const atendimento = document.getElementById("atendimento").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (!nome || !nota || !atendimento || !comentario) {
    mensagem.textContent = "Preencha todos os campos!";
    mensagem.style.color = "red";
    return;
  }

  try {
    await addDoc(collection(db, "feedbacks"), {
      nome,
      nota,
      atendimento,
      comentario,
      data: new Date().toISOString()
    });

    mensagem.textContent = "Obrigado pelo seu feedback!";
    mensagem.style.color = "green";
    document.getElementById("feedbackForm").reset();
  } catch (erro) {
    mensagem.textContent = "Erro ao enviar feedback: " + erro.message;
    mensagem.style.color = "red";
  }
});
