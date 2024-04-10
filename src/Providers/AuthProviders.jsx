import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContest = createContext(null)

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image
      })   
  }

  // loginUser
  const login =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }


  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    logOut,
    login
  }

  return (
    <AuthContest.Provider value={authInfo}>
      {children}
    </AuthContest.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
}