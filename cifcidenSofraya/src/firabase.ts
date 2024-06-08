import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKv0bqWJeuAhjAGM4tsjMT5O-lR57ATSo",
  authDomain: "ciftliktensepete.firebaseapp.com",
  projectId: "ciftliktensepete",
  storageBucket: "ciftliktensepete.appspot.com",
  messagingSenderId: "162157412107",
  appId: "1:162157412107:web:21edb5c40aa1bec342ac0e",
  measurementId: "G-5L1DRQNJMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);