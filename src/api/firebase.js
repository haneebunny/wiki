import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "808583037996",
  appId: "1:808583037996:web:7a4153a19a3d6649667d89",
};

// if (firebase.apps.length > 0) {
//   firebase.app();
// } else {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = getFirestore(firebaseApp);

// export const firebaseApp = !app.length ? initializeApp(config) : app();

// Initialize Firebase

// const auth = getAuth(app);
// const database = getDatabase(app);

// export function writeUserData(userId) {
//   const db = getDatabase();
//   set(ref(db, "admins"), {
//     userId,
//   });
// }

// export function readUserData(userId) {
//   const db = getDatabase();
//   const adminRef = ref(db, "admins");
//   onValue(adminRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
//     return Object.entries(data).toString().includes(userId) ? true : false;
//     //     return data?.map((adminId) => {
//     //       return adminId === userId ? true : false;
//     //     });
//   });
// }
