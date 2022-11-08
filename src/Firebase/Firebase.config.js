// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC11XGZmokNfoJ69n7wzitpbdf0XjVkGDw",
  authDomain: "homemadecrunch-494be.firebaseapp.com",
  projectId: "homemadecrunch-494be",
  storageBucket: "homemadecrunch-494be.appspot.com",
  messagingSenderId: "925386872513",
  appId: "1:925386872513:web:91ac278f18ca332072a640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app