// firebase/config.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSSuFr32U7ng9ti9y0sV1g3QTs5s9eM94",
  authDomain: "projeto-dengue-72cc7.firebaseapp.com",
  projectId: "projeto-dengue-72cc7",
  storageBucket: "projeto-dengue-72cc7.firebasestorage.app",
  messagingSenderId: "140145351200",
  appId: "1:140145351200:web:4ddad85b801ac71067ba45"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
