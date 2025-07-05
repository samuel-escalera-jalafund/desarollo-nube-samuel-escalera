import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDvxLvNxqNLMuQU6G9PYkMd-hYTXSANh8",
  authDomain: "desarollo-nube-samuel-escalera.firebaseapp.com",
  projectId: "desarollo-nube-samuel-escalera",
  storageBucket: "desarollo-nube-samuel-escalera.firebasestorage.app",
  messagingSenderId: "638301346040",
  appId: "1:638301346040:web:716759988f4831e6a0430d"
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseUi = new firebaseui.auth.AuthUI(firebaseAuth);
const firebaseDb = getFirestore(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);
const firebaseMessaging = getMessaging(firebaseApp);

firebaseAuth.useDeviceLanguage();
export { 
  firebaseAuth,
  firebaseUi,
  firebaseDb,
  firebaseStorage,
  firebaseMessaging,
};
