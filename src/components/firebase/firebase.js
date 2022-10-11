import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBdiwW5r3ldqGY7xETTzqvza6JView_qis",
    authDomain: "coder-react-peps.firebaseapp.com",
    projectId: "coder-react-peps",
    storageBucket: "coder-react-peps.appspot.com",
    messagingSenderId: "815543635520",
    appId: "1:815543635520:web:3c0326d196704f4cc759a5"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)
