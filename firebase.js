// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArYJIqfZjW0lHPU3j23wlwq0Mje6ctzUA",
    authDomain: "twitter-clone-83715.firebaseapp.com",
    projectId: "twitter-clone-83715",
    storageBucket: "twitter-clone-83715.appspot.com",
    messagingSenderId: "902745505264",
    appId: "1:902745505264:web:c79e26d39cbdac4f127135"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };