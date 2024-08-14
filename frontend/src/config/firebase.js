/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1h5H3cScJyB4IO8791W4feJVt4xhjt7k",
  authDomain: "chat-app-e1539.firebaseapp.com",
  databaseURL:
    "https://chat-app-e1539-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-app-e1539",
  storageBucket: "chat-app-e1539.appspot.com",
  messagingSenderId: "427475159629",
  appId: "1:427475159629:web:9bce45ae730c8a09ea6a04",
  measurementId: "G-35ESTKWTR0",
};

console.log("Api Key", firebaseConfig.apiKey);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
