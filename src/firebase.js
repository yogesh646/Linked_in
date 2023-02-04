import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtoPFoijPrL3Ku_Ry3CoNHl-Sx6tXDUh4",
  authDomain: "linked-in-91efb.firebaseapp.com",
  projectId: "linked-in-91efb",
  storageBucket: "linked-in-91efb.appspot.com",
  messagingSenderId: "707408097485",
  appId: "1:707408097485:web:675b9e0bd9df1b65b87984",
  measurementId: "G-G6G084M524"
};
 firebase.initializeApp(firebaseConfig);
 var database=firebase.firestore();
 var auth=firebase.auth();
 export default database;
 export {auth};
