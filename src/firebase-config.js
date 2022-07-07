import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from "firebase/auth"
// need to make a .envfile for below
const firebaseConfig = {
  apiKey: "AIzaSyC3PnOBtRvgc3udm-4RTRflJn_aqwS5xro",
  authDomain: "dbest-note-app.firebaseapp.com",
  projectId: "dbest-note-app",
  storageBucket: "dbest-note-app.appspot.com",
  messagingSenderId: "1081824881176",
  appId: "1:1081824881176:web:396d255f48a03ab5fdf16d",
  measurementId: "G-44TQRNTXLP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
