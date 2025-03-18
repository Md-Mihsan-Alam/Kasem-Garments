// // Import Firebase SDKs
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA26SaxJxNr7F-4QHQ8kzQiPHYZcj0ajEY",
//   authDomain: "kasem-garments-inventory.firebaseapp.com",
//   projectId: "kasem-garments-inventory",
//   storageBucket: "kasem-garments-inventory.appspot.com",
//   messagingSenderId: "417274733862",
//   appId: "1:417274733862:web:0064b687a5dbfd92dc0de7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export Firebase instances
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export default app;


import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA26SaxJxNr7F-4QHQ8kzQiPHYZcj0ajEY",
  authDomain: "kasem-garments-inventory.firebaseapp.com",
  projectId: "kasem-garments-inventory",
  storageBucket: "kasem-garments-inventory.appspot.com",
  messagingSenderId: "417274733862",
  appId: "1:417274733862:web:0064b687a5dbfd92dc0de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
