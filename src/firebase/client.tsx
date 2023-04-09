import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCICfQq7CoISuh8BXkdzJUgpTml6hN6y2c",
  authDomain: "movie-db-login-e7fa5.firebaseapp.com",
  projectId: "movie-db-login-e7fa5",
  storageBucket: "movie-db-login-e7fa5.appspot.com",
  messagingSenderId: "140287621520",
  appId: "1:140287621520:web:8c7b7fe1f27db881df5b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type LoginProps = {
  email: string;
  password: string;
};

const register = async ({ email, password }: LoginProps) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

const login = async ({ email, password }: LoginProps) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

const logout = async () => {
  const user = await signOut(auth);
  return user;
};

const resetPassword = async (email: string) => {
  try {
    const user = await sendPasswordResetEmail(auth, email);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

export { register, logout, login, resetPassword, auth };
