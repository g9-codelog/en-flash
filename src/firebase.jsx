import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDXu6hQTE-SPzV2ukhHppt6a8v8ZKwYiRA",
  authDomain: "english-flash-c15fb.firebaseapp.com",
  projectId: "english-flash-c15fb",
  storageBucket: "english-flash-c15fb.appspot.com",
  messagingSenderId: "898959306022",
  appId: "1:898959306022:web:f21c5432403475668ca5e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db; 