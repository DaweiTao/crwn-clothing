// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsEDovDooGRztANslmJKYYNBUr_-1IuWM",
  authDomain: "crwn-clothing-ffc89.firebaseapp.com",
  projectId: "crwn-clothing-ffc89",
  storageBucket: "crwn-clothing-ffc89.appspot.com",
  messagingSenderId: "456185719303",
  appId: "1:456185719303:web:8f8234d857b38d8ed6d8a2",
  measurementId: "G-C10ZENM1PY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);