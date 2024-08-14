import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" }; // Ensure the path is correct

// Initialize the Firebase Admin SDK
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

// Get the authentication service
const auth = getAuth(app);
console.log(auth);

// Now you can use 'auth' for user management tasks
export default auth;
