// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN0uXzYYU6j00ULP9J7TMCx7hUm0DmxP4",
  authDomain: "bible-francaise-english.firebaseapp.com",
  projectId: "bible-francaise-english",
  storageBucket: "bible-francaise-english.appspot.com",
  messagingSenderId: "179913240048",
  appId: "1:179913240048:web:7a37b5c65d4a5b104dc135",
  measurementId: "G-BCTR8KBB52"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize App Check with reCAPTCHA v3
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("YOUR_SITE_KEY_HERE"),
  isTokenAutoRefreshEnabled: true
});

// 👇 You can export app for use in other files
export default app;
