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



//NOTE: should be able to replace the above with the below (not sure why it's not working)
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId:  process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,