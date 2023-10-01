// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArJ_pdvoO8iv8l_oQdd94Tkq03OHjQg7w",
  authDomain: "career-hub-6ddf1.firebaseapp.com",
  projectId: "career-hub-6ddf1",
  storageBucket: "career-hub-6ddf1.appspot.com",
  messagingSenderId: "1048176089147",
  appId: "1:1048176089147:web:57824eecc625252c4fa41e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
