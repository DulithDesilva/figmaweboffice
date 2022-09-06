import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWxxsoOW2qt50tOBbELxq0pJqpr7wP4vE",
  authDomain: "figmaweboffice.firebaseapp.com",
  databaseURL: "https://figmaweboffice-default-rtdb.firebaseio.com",
  projectId: "figmaweboffice",
  storageBucket: "figmaweboffice.appspot.com",
  messagingSenderId: "235291865538",
  appId: "1:235291865538:web:8cf355b31c2cd7d43e665b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
