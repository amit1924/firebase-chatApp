// import { initializeApp, cert } from "firebase-admin/app";
// import { getAuth } from "firebase-admin/auth";
// import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" }; // Ensure the path is correct

// // Initialize the Firebase Admin SDK
// const app = initializeApp({
//   credential: cert(serviceAccountKey),
// });

// // Get the authentication service
// const auth = getAuth(app);
// console.log(auth);

// // Now you can use 'auth' for user management tasks
// export default auth;

import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import dotenv from "dotenv";

dotenv.config();
// Parse the service account credentials from the environment variable
const serviceAccountKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Initialize the Firebase Admin SDK
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

// Get the authentication service
const auth = getAuth(app);
console.log(auth);

// Now you can use 'auth' for user management tasks
export default auth;
