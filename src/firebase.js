// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDerm5m1kevB-Tb9_uftb5ihfOIwS3Gokg",
  authDomain: "cloud-storage-react-app.firebaseapp.com",
  projectId: "cloud-storage-react-app",
  storageBucket: "cloud-storage-react-app.appspot.com", // fixed incorrect URL
  messagingSenderId: "838149444582",
  appId: "1:838149444582:web:c49e52c561b0363e78fc27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
