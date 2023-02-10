import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

  // User sign up with email and password
  const signUpWithEmailPassword = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        verifyEmail();
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // User sign in with email and password
  const signInWithEmailPassword = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  };

  // Verify user email address
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };

  // User password reset
  const passwordReset = ({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // User sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo({});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // User observation
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
      } else {
        setUserInfo({});
      }
    });
  }, []);

  return {
    userInfo,
    error,
    signInWithGoogle,
    signUpWithEmailPassword,
    signInWithEmailPassword,
    passwordReset,
    logOut,
  };
};

export default useFirebase;
