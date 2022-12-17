import React, { useContext, useState, useEffect, ReactNode } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '@firebase/auth';
import { auth } from '@/plugin/firebase';

type AuthProps = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = React.createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<unknown>(null);
  const [loading, setloading] = useState<boolean>(true);

  function signup({ email, password }: AuthProps) {
    createUserWithEmailAndPassword(auth, email, password);
    return;
  }

  function login({ email, password }: AuthProps) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setloading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
