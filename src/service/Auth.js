import firebase from "../config/Config_Aut_Fir";

// Show Popup_(SingIN Time)
const Auth = (Provider) => {
  firebase.auth().signInWithPopup(Provider)
    .then((res) => {
      return (
        res.user
      )
    }
    ).catch((err) => {
      return (
        err
      )
    })
};

export default Auth
