import { createContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signPopUpGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current user', currentUser);

      // get and set token
      if (currentUser) {
        axios.post('https://restaurant-server-chi.vercel.app/jwt', { email: currentUser.email })
          .then(data => {
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
          })
      }
      else {
        localStorage.removeItem('access-token')
      }


    });
    return () => {
      return unsubscribe();
    }
  }, [])

  const signOutUser = () => {
    return signOut(auth);
  };


  const authInfo = {
    user,
    createUser,
    signInUser,
    signPopUpGoogle,
    signOutUser,
    forgetPassword,
    loading,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
