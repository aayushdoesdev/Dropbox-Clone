import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCsxEM-VBmqfKZTlAnkjvtMpmWxeJ_AmU4",
    authDomain: "dropbox-clone-3dab6.firebaseapp.com",
    projectId: "dropbox-clone-3dab6",
    storageBucket: "dropbox-clone-3dab6.appspot.com",
    messagingSenderId: "555976526757",
    appId: "1:555976526757:web:01c30f8651e850c0aeb64c"
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const storage = getStorage(app)

  export { db, storage}