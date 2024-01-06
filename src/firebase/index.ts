import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-SNp_t-WXEF0U8Pj7vJojZSB5H2diFA",
  authDomain: "hotstar-clone-97af3.firebaseapp.com",
  projectId: "hotstar-clone-97af3",
  storageBucket: "hotstar-clone-97af3.appspot.com",
  messagingSenderId: "973426252146",
  appId: "1:973426252146:web:28b8b6015e9cab328ea5eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
