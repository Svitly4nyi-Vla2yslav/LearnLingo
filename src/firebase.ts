import { Auth, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAXOHSnwXDXyo08kuoU4yEaQGLMAoHlhNo",
//   authDomain: 'learnlingo-7d407.firebaseapp.com',
//   projectId: 'learnlingo-7d407',
//   storageBucket: 'learnlingo-7d407.appspot.com',
//   messagingSenderId: '179165568182',
//   appId: '1:179165568182:web:1909949e86bc66d4f99a17',
//   databaseURL:
//     'https://learnlingo-7d407-default-rtdb.europe-west1.firebasedatabase.app/',
// };

export const firebaseConfig = {
  apiKey: "AIzaSyCzZoPkbBprm3eu5lNt47f1GKMUHoBzPlo",
  authDomain: "learnlingo1.firebaseapp.com",
  databaseURL: "https://learnlingo1-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingo1",
  storageBucket: "learnlingo1.appspot.com",
  messagingSenderId: "165391341432",
  appId: "1:165391341432:web:edff3e5a1bb989f50f9a8d",
  measurementId: "G-4VXPHQXXJ5"
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth: Auth = getAuth(app);

const db = getDatabase(app);
console.log(db)
const data = getFirestore(app);
const dbRef = ref(getDatabase());
console.log(dbRef)

export { app, googleAuthProvider, db, data, auth, dbRef };


