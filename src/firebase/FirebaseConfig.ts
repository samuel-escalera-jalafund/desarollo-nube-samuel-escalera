import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { getFirestore } from "firebase/firestore";

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
export const firebaseAnalytics = getAnalytics(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);
export const firebaseUi = new firebaseui.auth.AuthUI(firebaseAuth);
export const firebaseDb = getFirestore(firebaseApp);

firebaseAuth.useDeviceLanguage();
export { firebaseAuth };
