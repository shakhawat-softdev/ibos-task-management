// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCijNjEdy4gcc6APB0UgWtTzXpTZEizfyg",
   authDomain: "ibos-task-management-d6de5.firebaseapp.com",
   projectId: "ibos-task-management-d6de5",
   storageBucket: "ibos-task-management-d6de5.appspot.com",
   messagingSenderId: "859809827772",
   appId: "1:859809827772:web:b7388140db73de846879b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;