
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQIYDk2MdXvVo0x_TMPG_XcMj6AVRSpig",
  authDomain: "oyunsanaa-burtgel.firebaseapp.com",
  projectId: "oyunsanaa-burtgel",
  storageBucket: "oyunsanaa-burtgel.firebasestorage.app",
  messagingSenderId: "374606141353",
  appId: "1:374606141353:web:c4a1370954f33c2efd16b8",
  measurementId: "G-WSGMQ7TMXD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
