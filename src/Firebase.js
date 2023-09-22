// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgcS7ahsB10yPQLT_LCqLHY7mP8eJ4pXQ",
  authDomain: "ecom-ghost-full.firebaseapp.com",
  projectId: "ecom-ghost-full",
  storageBucket: "ecom-ghost-full.appspot.com",
  messagingSenderId: "956256071599",
  appId: "1:956256071599:web:ade61c5a8efb36fa54095a",
  measurementId: "G-EBGK067B2M"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);