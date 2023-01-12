import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD7eNQMTyC_JxFEtqsA5vPljiBQE9fj6c",
  authDomain: "mixy-ecommerce.firebaseapp.com",
  projectId: "mixy-ecommerce",
  storageBucket: "mixy-ecommerce.appspot.com",
  messagingSenderId: "592161081809",
  appId: "1:592161081809:web:26743a33326cded286b8f0",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

export { auth, googleAuthProvider };
