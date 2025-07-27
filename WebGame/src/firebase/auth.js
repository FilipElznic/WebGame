import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

// Register new user
export const registerUser = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update user profile with display name
    await updateProfile(user, {
      displayName: displayName,
    });

    // Save user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      xp: 0, // Start with 0 XP
      level: 1, // Start at level 1
      createdAt: new Date().toISOString(),
    });

    return { user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

// Get current user data from Firestore
export const getCurrentUserData = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      return { userData: null, error: "No user logged in" };
    }

    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
    if (userDoc.exists()) {
      return { userData: userDoc.data(), error: null };
    } else {
      return { userData: null, error: "User data not found" };
    }
  } catch (error) {
    return { userData: null, error: error.message };
  }
};

// Auth state observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

// Create missing user document in Firestore for existing auth users
export const createMissingUserDoc = async (authUser) => {
  try {
    if (!authUser) {
      return { error: "No user provided" };
    }

    // Check if document already exists
    const userDoc = await getDoc(doc(db, "users", authUser.uid));
    if (userDoc.exists()) {
      return { userData: userDoc.data(), error: null };
    }

    // Create missing document
    const userData = {
      uid: authUser.uid,
      email: authUser.email,
      displayName: authUser.displayName || authUser.email.split("@")[0],
      xp: 0,
      level: 1,
      createdAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "users", authUser.uid), userData);
    return { userData, error: null };
  } catch (error) {
    return { userData: null, error: error.message };
  }
};
