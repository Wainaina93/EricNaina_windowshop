// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtaN7rassR3hiiA19yf9Zf8Bzal97Q0NU",
  authDomain: "ericnaina-windowshop.firebaseapp.com",
  projectId: "ericnaina-windowshop",
  storageBucket: "ericnaina-windowshop.appspot.com",
  messagingSenderId: "252611325862",
  appId: "1:252611325862:web:deac3cc537d0451af3e967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;