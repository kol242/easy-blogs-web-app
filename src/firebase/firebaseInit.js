import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCnOcqnFmmfWwGPpTbASIG0rlTHiNlcWIU",
    authDomain: "easyblogs-ce322.firebaseapp.com",
    projectId: "easyblogs-ce322",
    storageBucket: "easyblogs-ce322.appspot.com",
    messagingSenderId: "223190585489",
    appId: "1:223190585489:web:8d4e79c189532f3bd5af30"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()
