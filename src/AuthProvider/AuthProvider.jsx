import React, { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithPopUp = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photoUrl) => {
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    loginWithPopUp,
    profileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
