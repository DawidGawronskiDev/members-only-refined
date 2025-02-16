"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type ParsedToken,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { removeTokens, setTokens } from "@/actions/cookies";

interface AuthContextType {
  currentUser: User | null;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  customClaims: ParsedToken | null;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  logout: async () => {},
  loginWithGoogle: async () => {},
  customClaims: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [customClaims, setCustomClaims] = useState<ParsedToken | null>(null);

  const handleAuthChange = async (user: User | null) => {
    if (user) {
      const tokenResult = await user.getIdTokenResult();
      const token = tokenResult.token;
      const refreshToken = user.refreshToken;

      const claims = tokenResult.claims;
      setCustomClaims(claims ?? null);

      if (token && refreshToken) {
        await setTokens({ token, refreshToken });
      }
    } else {
      await removeTokens();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      handleAuthChange(user);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, logout, loginWithGoogle, customClaims }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
