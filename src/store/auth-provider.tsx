"use client";

import { removeCookies, setCookies } from "@/actions/cookies";
import { auth } from "@/lib/firebase-client";
import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

export interface AuthContextProps {
  currentUser: User | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const handleUserChange = async (user: User | null) => {
  if (user) {
    const tokenResult = await user.getIdTokenResult();
    const token = tokenResult.token;
    const refreshToken = user.refreshToken;
    await setCookies({ token, refreshToken });
  } else {
    await removeCookies();
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      await handleUserChange(user);
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }
  return context;
};
