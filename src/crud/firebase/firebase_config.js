import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEY4Qneme9ocg6JppWUMbqyhCTNkUOgsc",
  authDomain: "mi-amigo-crud.firebaseapp.com",
  projectId: "mi-amigo-crud",
  storageBucket: "mi-amigo-crud.appspot.com",
  messagingSenderId: "382748540714",
  appId: "1:382748540714:web:16c0029928527666636853"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(
    app,
    {
        persistence: getReactNativePersistence
    }
)
const firestoreDb = getFirestore(app)

export {auth, firestoreDb}