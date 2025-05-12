// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMBRzSeLGoNft2_cebbvBgzCDdGmURiKU",
  authDomain: "bluechatz.firebaseapp.com",
  projectId: "bluechatz",
  storageBucket: "bluechatz.firebasestorage.app",
  messagingSenderId: "164175148616",
  appId: "1:164175148616:web:35287e8ddef7fc5ae94a7d",
  measurementId: "G-W0E78CJ5V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);