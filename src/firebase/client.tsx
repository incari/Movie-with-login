import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID
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
