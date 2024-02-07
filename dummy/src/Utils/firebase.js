// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMXvno5c_6BqDyPwj-O_9sRKS1Zgulezs",
  authDomain: "weather-app-12313.firebaseapp.com",
  projectId: "weather-app-12313",
  storageBucket: "weather-app-12313.appspot.com",
  messagingSenderId: "463509667840",
  appId: "1:463509667840:web:8096bc3e37c980dd4618e5",
  measurementId: "G-4MY575F3XE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();