import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALxlCbzGaWst-JSiFubxRx_wGb6eJcNRY",
  authDomain: "dentist-ass11.firebaseapp.com",
  projectId: "dentist-ass11",
  storageBucket: "dentist-ass11.appspot.com",
  messagingSenderId: "418430186216",
  appId: "1:418430186216:web:18b031ba3ca53b3ccd4f5d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;