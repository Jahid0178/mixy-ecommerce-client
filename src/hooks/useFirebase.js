import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");

  // Auth
  const auth = getAuth();

  // Providers
  const googleProvider = new GoogleAuthProvider();

  // User sign in with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUserInfo(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // User sign in with email and password
  const signInWithEmailPassword = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return {
    userInfo,
    error,
    signInWithGoogle,
    signInWithEmailPassword,
  };
};

export default useFirebase;
