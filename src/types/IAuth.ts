import { ReactNode } from 'react';
import { UserCredential } from 'firebase/auth';

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextProps = {
  currentUser: unknown;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
};
