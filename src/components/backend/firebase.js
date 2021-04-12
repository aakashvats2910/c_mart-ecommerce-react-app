import firebase from "firebase";
import HeaderBar from "../headerbar";
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

  static passHeaderBarInstance(hb) {
    this.headerbar = hb;
  }

  // static isLoggedIn() {
  //   var user = firebase.auth().currentUser;
  // }

  static logout() {
    firebase.auth().signOut();
    this.headerbar.setState({
      buttonText: "Login with Google",
    });
  }

  static addAuthChangedListener() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user != null) {
        this.headerbar.setState({
          buttonText: user.displayName + " - Logout",
        });
      } else {
        this.headerbar.setState({
          buttonText: "Login with Google",
        });
      }
    });
  }

  static loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var uid = result.user.uid;
        this.headerbar.setState({
          buttonText: result.user.displayName + " - Logout",
        });
        console.log(this.headerbar.state.buttonText);
        // setting the details in the database.
        firebase.firestore().collection("users").doc(uid).set({
          name: result.user.displayName,
          uid: result.user.uid,
          email: result.user.email,
        });
        return uid;
      })
      .catch((error) => {
        var errorCode = error.code;
        return "Login with GOogle";
      });
    return "Login with Google";
  }

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

  static loginUser(email_, passwd_) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email_, passwd_)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("hurray logged in");
        // ...
        return user;
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
    name_,
    category_,
    description_,
    price_,
    discountP_,
    imageThousand_,
    otherImages_
  ) {
    firebase.firestore().collection("products").add({
      name: name_,
      category: category_,
      description: description_,
      price: price_,
      discountP: discountP_,
      imageThousand: imageThousand_,
      otherImages: otherImages_,
    });
  }

  // static addProductInDB(product) {
  //   var abcd = {
  //     name: product.name,
  //     category: product.category,
  //     description: product.description,
  //     price: product.price,
  //     discountP: product.discountP,
  //     imageThousand: product.imageThousand,
  //     otherImages: product.otherImages,
  //   };
  //   console.log(abcd);
  //   // firebase.firestore().collection("products").add();
  // }
}

export default firebase;
