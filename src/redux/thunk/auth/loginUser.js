import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.initialize";
import { loginFail, loginStart, loginSuccess } from "../../actions/userAction";

const loginUser = (data) => {
  const { email, password } = data;
  console.log(data);
  return (dispatch, getState) => {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(loginFail(errorMessage));
      });
  };
};

export default loginUser;
