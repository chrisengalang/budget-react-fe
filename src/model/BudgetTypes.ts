import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  userId: string;
}

export interface AccountCreateRequest {
  name: string;
  balance: number;
  userId?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  errorMessage: string;
}

export interface RegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  isSuccess: boolean;
  errorMessage: string;
}

export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}