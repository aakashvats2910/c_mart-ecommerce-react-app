import firebase from "firebase";
import HeaderBar from "../headerbar";
import { browserHistory } from "react-router";
import Staticdata from "./staticjs";

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

  static passMyOrdersInstance(mo) {
    this.myorders = mo;
  }

  static passHeaderBarInstance(hb) {
    this.headerbar = hb;
  }

  static passCategoryInstance(cat) {
    this.category = cat;
  }

  static passCProductInstance(pro) {
    this.product = pro;
  }

  static getMyOrders() {
    console.log("FOR DATABASE UID : " + Staticdata.useruid);
    firebase
      .firestore()
      .collection("users")
      .doc(Staticdata.useruid)
      .collection("myorders")
      .get()
      .then((snapshot) => {
        var productsArray = [];
        var toReturnArray = [];
        var orderIdArray = [];
        snapshot.forEach((doc) => {
          var productToGetData = doc.data().product;
          console.log("Product to get : " + productToGetData);
          productsArray.push(productToGetData);
          orderIdArray.push(doc.id);
        });

        for (var i = 0; i <= productsArray.length - 1; i++) {
          let k = i;
          firebase
            .firestore()
            .collection("products")
            .doc(productsArray[i])
            .get()
            .then((snap) => {
              console.log("DATA : " + snap.data().name);
              let tmp = {
                productName: snap.data().name,
                quantity: "1",
                costPerQuantity: snap.data().price,
                totalCost: snap.data().price,
                productId: "#" + snap.id,
                orderId: orderIdArray[k],
              };
              console.log("TMP : " + tmp);
              toReturnArray.push(tmp);
              this.myorders.setState({ itemsArray: toReturnArray });
            });
          console.log("LENGTH OUT : " + toReturnArray.length);
        }
      });
  }

  static buyThisProduct() {
    console.log("Buying the product uid : " + Staticdata.useruid);
    firebase
      .firestore()
      .collection("users")
      .doc(Staticdata.useruid)
      .collection("myorders")
      .add({ product: Staticdata.product });
  }

  static searchForProductData() {
    console.log("Searching product data");

    firebase
      .firestore()
      .collection("products")
      .doc(Staticdata.product)
      .get()
      .then((snapshot) => {
        console.log("Snapshot got " + snapshot.data().name);
        console.log("Snapshot got " + snapshot);
        this.product.setState({ name: snapshot.data().name });
        this.product.setState({ price: "₹" + snapshot.data().price });
        this.product.setState({ description: snapshot.data().description });
        this.product.setState({ productId: "#" + snapshot.id });
        var disPri = snapshot.data().price;
        disPri = disPri.replaceAll(",", "");
        disPri = parseInt(disPri);
        var dis = snapshot.data().discountP;
        dis = parseInt(dis);
        var discountedPriceToShow = Math.floor(disPri - (disPri * dis) / 100);
        var youSaveToShow = disPri - discountedPriceToShow;
        this.product.setState({ youSave: "₹" + youSaveToShow });
        this.product.setState({ discountedPrice: "₹" + discountedPriceToShow });
        this.product.setState({
          discountP: "(" + snapshot.data().discountP + ") %",
        });
        // seperate the links
        var splitedArray = snapshot.data().otherImages.split(",");
        this.product.setState({ imagesList: splitedArray });

        //description
        var descriptionArray = snapshot.data().description.split(",");
        this.product.setState({ description: descriptionArray });
      });
  }

  static searchForCategoryAndSaveInStatic(category) {
    console.log("");
    firebase
      .firestore()
      .collection("products")
      .where("category", "==", Staticdata.category)
      .get()
      .then((snapshot) => {
        var toPass = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          toPass.push({
            name: doc.data().name,
            description: doc.data().description,
            discountP: doc.data().discountP,
            imageThousand: doc.data().imageThousand,
            uid: doc.id,
          });
        });

        this.category.setState({ listToShow: toPass });
      });
  }

  static logout() {
    firebase.auth().signOut();
    this.headerbar.setState({
      buttonText: "Login with Google",
    });
    Staticdata.useruid = "";
  }

  static setLoginButtonName() {
    this.headerbar.setState({
      buttonText: Staticdata.username + " - Logout",
    });
  }

  static loginWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var uid = result.user.uid;
        Staticdata.useruid = uid;
        console.log("Before UID : " + uid);
        console.log("SEt uid to : " + Staticdata.useruid);
        Staticdata.username = result.user.displayName;
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
