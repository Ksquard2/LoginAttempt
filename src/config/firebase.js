import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhuXFoOCHJ1O9QujfUtZUQR9VdvCwwfQ",
  authDomain: "tester777-4b2d8.firebaseapp.com",
  projectId: "tester777-4b2d8",
  storageBucket: "tester777-4b2d8.firebasestorage.app",
  messagingSenderId: "126892316915",
  appId: "1:126892316915:web:1fe06da51a7814b2457f86",
  measurementId: "G-4PSD07X4ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Optional: For development, connect to local emulator
// Uncomment and configure if using Firebase Emulator
// if (process.env.NODE_ENV === 'development') {
//   connectAuthEmulator(auth, 'http://localhost:9099');
// }

// Configure auth settings to help with cross-origin issues
auth.settings = {
  signInFlow: 'popup',
};

export { 
  app, 
  auth, 
  db, 
  storage, 
  analytics 
};