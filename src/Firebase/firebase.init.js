import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKP3-0r8t3cPo0SeaLK56PQGHKXO4aA3s",
  authDomain: "to-do-app-40f6c.firebaseapp.com",
  projectId: "to-do-app-40f6c",
  storageBucket: "to-do-app-40f6c.appspot.com",
  messagingSenderId: "802335031448",
  appId: "1:802335031448:web:65f7f912ea8a75584d90ed"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;