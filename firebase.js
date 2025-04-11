import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNub5uLs6PV1CrElsBjtF9YgKcJnGGMMs",
  authDomain: "pesquisacauantech.firebaseapp.com",
  projectId: "pesquisacauantech",
  storageBucket: "pesquisacauantech.appspot.com",
  messagingSenderId: "1034916266441",
  appId: "1:1034916266441:web:f9c71ba912bb7c3694a818"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
