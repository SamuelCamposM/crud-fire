  
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'
const config = {
    apiKey: "AIzaSyAZ-k2TzzyBuwI-34FmQpVmYqtX3qDgVzI",
    authDomain: "crud-firedb.firebaseapp.com",
    databaseURL: "https://crud-firedb.firebaseio.com",
    projectId: "crud-firedb",
    storageBucket: "crud-firedb.appspot.com",
    messagingSenderId: "642472831440",
    appId: "1:642472831440:web:f6bbe8af6211c3a94431d5"
  };
  // Initialize Firebase
 const firebaseapp = firebase.initializeApp(config);

  export default firebaseapp.firestore();