import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.initialize";
import {
  registerFail,
  registerStart,
  registerSuccess,
} from "../../actions/userAction";

const RegisterUser = ({ email, password }) => {
  return (dispatch, getState) => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(registerSuccess(user));
      })
      .catch((error) => {
        dispatch(registerFail(error.message));
      });
  };
};

export default RegisterUser;
