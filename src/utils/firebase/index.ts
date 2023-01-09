import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcBILYEK6gFI33kZUyilae4oGle9U0fu8",
  authDomain: "exepnsify-f3ea1.firebaseapp.com",
  projectId: "exepnsify-f3ea1",
  storageBucket: "exepnsify-f3ea1.appspot.com",
  messagingSenderId: "817574760616",
  appId: "1:817574760616:web:919f187061734199f6f29d",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();
