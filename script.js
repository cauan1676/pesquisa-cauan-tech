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
