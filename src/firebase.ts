import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCx2ldThjWamq2ha0gbMH9T54CFTJC_UOM",
  authDomain: "learnlingo-502d5.firebaseapp.com",
  databaseURL: "https://learnlingo-502d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-502d5",
  storageBucket: "learnlingo-502d5.appspot.com",
  messagingSenderId: "947824481559",
  appId: "1:947824481559:web:8c91602df594e78a6ed352",
  measurementId: "G-GX2P1JLH94"
};

const app = initializeApp(firebaseConfig);


const googleAuthProvider = new GoogleAuthProvider();

const auth: Auth = getAuth(app);

const db = getDatabase(app);
const data = getFirestore(app);
const dbRef = ref(getDatabase());


export { app, googleAuthProvider, db, data, auth, dbRef };