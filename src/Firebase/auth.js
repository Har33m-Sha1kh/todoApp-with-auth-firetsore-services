import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./conf";

const auth=getAuth(app);
 
export const SignUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user.uid;
    } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert("Error: Email already in use");
                break;
            case 'auth/invalid-email':
                alert("Error: Invalid email");
                break;
            case 'auth/weak-password':
                alert("Error: Password is too weak");
                break;
            default:
                alert("Error: " + error.message);
        }
    }
};

export const Login = async (email, password) => {
  try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user.uid;
  } catch (error) {
      switch (error.code) {
          case 'auth/user-not-found':
              alert("Do you have an account? If not, sign up first.");
              break;
          case 'auth/wrong-password':
              alert("Error: Wrong password");
              break;
          case 'auth/invalid-email':
              alert("Error: Invalid email");
              break;
          default:
              alert("Error: " + error.message);
      }
      }
};




  