import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCZagrbcDrWuCdI0MubcsYk1YY-OtpPe6o",
  authDomain: "invoice-management-7a3bb.firebaseapp.com",
  projectId: "invoice-management-7a3bb",
  storageBucket: "invoice-management-7a3bb.appspot.com",
  messagingSenderId: "759727157114",
  appId: "1:759727157114:web:34247559f619461f6bb0c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
