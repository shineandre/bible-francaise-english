// src/firebase-config.js

// 1) Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// 2) Your Firebase configuration (keep your actual keys here)
const firebaseConfig = {
  apiKey: "AIzaSyCN0uXzYYU6j00ULP9J7TMCx7hUm0DmxP4",
  authDomain: "bible-francaise-english.firebaseapp.com",
  projectId: "bible-francaise-english",
  storageBucket: "bible-francaise-english.appspot.com",
  messagingSenderId: "179913240048",
  appId: "1:179913240048:web:7a37b5c65d4a5b104dc135",
  measurementId: "G-BCTR8KBB52"
};

// 3) Initialize Firebase
const app = initializeApp(firebaseConfig);

// 4) Initialize App Check with your reCAPTCHA v3 site key
//    Replace "YOUR_SITE_KEY_HERE" with the actual Site Key you got from Firebase App Check
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ld59FMrAAAAALKB1AQCtXHCEK86pJ65ArqZy9By"),
  isTokenAutoRefreshEnabled: true
});

// 5) Export the initialized Firebase App so that other files can import it if needed
export default app;
