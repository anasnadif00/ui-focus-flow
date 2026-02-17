import React, { createContext, useState, useCallback, useEffect } from "react";

export interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export interface AuthUser {
  id: string;
  username: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
