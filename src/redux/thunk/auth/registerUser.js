import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.initialize";
import { registerFail, registerStart } from "../../actions/userAction";

const registerUser = ({ firstName, email, password }) => {
  return async (dispatch, getState) => {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        dispatch(registerFail(error));
      });
  };
};

export default registerUser;
