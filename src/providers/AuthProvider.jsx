import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const authContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   //Create New User 
   const registerNewUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   };
   //loginWithEmailAndPass
   const loginWithEmailAndPass = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   };

   const loginWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
   }
   //Logou User
   const logout = () => {
      setLoading(true)
      return signOut(auth);
   };

   //  CurrentlysignInuser

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         setLoading(false)
         setUser(user)
         console.log("Auth Provider.jsx user: ", user);
      });
      return () => {
         unsubscribe();
      }
   }, [])


   const authInfo = { loading, user, registerNewUser, loginWithEmailAndPass, loginWithGoogle, logout }
   return (
      <authContext.Provider value={authInfo}>
         {children}
      </authContext.Provider>

   );
};

export default AuthProvider;