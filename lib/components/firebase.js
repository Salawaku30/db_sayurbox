// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSiGEfSG03cJvDJs5OJ_hqwqO9Kwra5RA",
  authDomain: "healtybox-6142b.firebaseapp.com",
  projectId: "healtybox-6142b",
  storageBucket: "healtybox-6142b.appspot.com",
  messagingSenderId: "1085262628017",
  appId: "1:1085262628017:web:f147208876f4c91f07ce90",
  measurementId: "G-7T97608N49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
