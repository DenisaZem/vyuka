import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC0gOC5wxDlAX7rPnpeXSApeD3dwtH94Lo",
    authDomain: "jazykovy-kurz.firebaseapp.com",
    projectId: "jazykovy-kurz",
    storageBucket: "jazykovy-kurz.appspot.com",
    messagingSenderId: "183835712148",
    appId: "1:183835712148:web:672e186b820e4acc657281"
  };




  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}