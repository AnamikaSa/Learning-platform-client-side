// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91Nkh2aAgSFHbujv6CCf3feLLuNpWr7k",
  authDomain: "learning-platform-anamika.firebaseapp.com",
  projectId: "learning-platform-anamika",
  storageBucket: "learning-platform-anamika.appspot.com",
  messagingSenderId: "491434902431",
  appId: "1:491434902431:web:f9a4051fd79d21e5d0f3aa",
  measurementId: "G-FKFPVDDMBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;