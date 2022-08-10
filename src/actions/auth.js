import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut  } from "firebase/auth";
import { firebase, authapp } from  "../firebase/firebase";

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});
const provider = new GoogleAuthProvider();
export const startLogin = (callback) => {
  return () => {
    return signInWithPopup(authapp, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log("Ya esta logeado");

      //callback();
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode, errorMessage,  credential);

      // ...
    });
  
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return signOut(authapp).then(() => {
      // Sign-out successful.
      alert("Signed out");
    }).catch((error) => {
      // An error happened.
    });
  };
};
