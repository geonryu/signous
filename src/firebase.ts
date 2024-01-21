import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCramb4wcwuHnPEgY8hz3m9AP9ViHar9gc",
    authDomain: "signous-bc70c.firebaseapp.com",
    projectId: "signous-bc70c",
    storageBucket: "signous-bc70c.appspot.com",
    messagingSenderId: "985583205243",
    appId: "1:985583205243:web:4907431e97a9fa10bcdbde",
    measurementId: "G-Y0FGQXT09P"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);