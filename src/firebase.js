import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCp82njqhCHZzB-MsoIWjrdYzHepmXEGFI",
  authDomain: "restaurant-website-87468.firebaseapp.com",
  projectId: "restaurant-website-87468",
  storageBucket: "restaurant-website-87468.appspot.com",
  messagingSenderId: "148014646809",
  appId: "1:148014646809:web:a93d38c2a2404561150c88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

export { app };
