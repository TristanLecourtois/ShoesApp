import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAupl_xLmLK2gaeDfQtImjsRqlg9TN-uH8",
  authDomain: "shoesapp-a3e4a.firebaseapp.com",
  projectId: "shoesapp-a3e4a",
  storageBucket: "shoesapp-a3e4a.appspot.com",
  messagingSenderId: "976318749547",
  appId: "1:976318749547:web:f4d04514abfeb84ecc4a2e",
  measurementId: "G-N5MYFN1K7S",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
