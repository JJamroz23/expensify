import {
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, database } from "./";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export type AdditionalInforamtion = {
  displayName?: string;
};

export type UserData = {
  createdAt?: Date;
  displayName: string;
  email: string;
  uid: string;
};

const setUserDoc = async (
  userDocRef: any,
  { displayName, email }: any,
  additionalInformation: any
) => {
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt: new Date(),
      ...additionalInformation,
    });
  } catch (err) {
    console.log("Error in creating user", (err as Error).message);
    throw err;
  }
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInforamtion
): Promise<UserData> => {
  try {
    if (!userAuth) {
      throw new Error("Missing user auth object.");
    }
    const userDocRef = doc(database, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      await setUserDoc(userDocRef, userAuth, additionalInformation);
    }

    return {
      uid: userAuth.uid,
      email: userAuth.email,
      displayName: userAuth.displayName,
    } as UserData;
  } catch (error) {
    console.error(error);
    console.error("Error creating user document from auth");
    throw error;
  }
};

export const signOutUser = async () => await signOut(auth);

export const authStateChangeListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
