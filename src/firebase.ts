import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCx2ldThjWamq2ha0gbMH9T54CFTJC_UOM",
  authDomain: 'learnlingo-502d5.firebaseapp.com',
  projectId: 'learnlingo-502d5',
  storageBucket: 'learnlingo-502d5.appspot.com',
  messagingSenderId: '947824481559',
  appId: '1:179165568182:web:1909949e86bc66d4f99a17',
  databaseURL:
  "https://learnlingo-502d5-default-rtdb.europe-west1.firebasedatabase.app" ,
};

const app = initializeApp(firebaseConfig);

const googleAuthProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const database = getDatabase(app);

const dbRef = ref(getDatabase());


export { app, googleAuthProvider, database, auth, dbRef };