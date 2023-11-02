import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8rkaCeS8GYwXA-l5rdfDUe-cbt7frZVg",
  authDomain: "automatedcontentcreation.firebaseapp.com",
  projectId: "automatedcontentcreation",
  storageBucket: "automatedcontentcreation.appspot.com",
  messagingSenderId: "208368355986",
  appId: "1:208368355986:web:581ba86d728656843df44b",
  measurementId: "G-WLTBN5HEL7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth,provider};
// const analytics = getAnalytics(app);