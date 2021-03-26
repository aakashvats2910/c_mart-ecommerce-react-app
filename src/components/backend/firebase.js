import firebase from "firebase";
var firebaseui = require("firebaseui");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyB2YkqgEujCO28bqeYtGzmY5Yaw19eVS34",
  authDomain: "knowahead-84741.firebaseapp.com",
  databaseURL: "https://knowahead-84741.firebaseio.com",
  projectId: "knowahead-84741",
  storageBucket: "knowahead-84741.appspot.com",
  messagingSenderId: "904853709700",
  appId: "1:904853709700:web:bd8ce617b77c90048f73d1",
  measurementId: "G-9P9VY23EBX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export class Fire {
  constructor() {}

  static startAuthUIForLogin() {
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start("#loginfrag", {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
  }

  static addUserInDB(
    email_,
    passwd_,
    fname_,
    lname_,
    mobile_,
    add1_,
    add2_,
    city_,
    state_,
    zip_
  ) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email_, passwd_)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        firebase
          .firestore()
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            email: email_,
            passwd: passwd_,
            fname: fname_,
            lname: lname_,
            mobile: mobile_,
            add1: add1_,
            add2: add2_,
            city: city_,
            state: state_,
            zip: zip_,
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error);
        // ..
      });
  }

  static addProductInDB(
    name,
    category,
    description,
    price,
    discountP,
    thousandImage,
    otherImages
  ) {}
}

export default firebase;
