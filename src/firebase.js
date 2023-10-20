// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAEu7y1ivJsxr_mj-WeffgU43c_kwAymw",
  authDomain: "vaibhavportfolio-f51f8.firebaseapp.com",
  projectId: "vaibhavportfolio-f51f8",
  storageBucket: "vaibhavportfolio-f51f8.appspot.com",
  messagingSenderId: "40726671394",
  appId: "1:40726671394:web:1baa47ad9bcc32ca391a7b",
  measurementId: "G-64E7Y75R1G"
};

// Initialize Firebase
const app1 = firebase.initializeApp(firebaseConfig)
export const authentication = getAuth(app1)

export default firebase