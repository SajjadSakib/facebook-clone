import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC-lhz3DH1PlrEbjkgJv90pUif0nssESc",
    authDomain: "faccebook-a8bb0.firebaseapp.com",
    projectId: "faccebook-a8bb0",
    storageBucket: "faccebook-a8bb0.appspot.com",
    messagingSenderId: "332354057127",
    appId: "1:332354057127:web:db59b7027965af826d7c82",
    measurementId: "G-KCP7KW1QXQ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;