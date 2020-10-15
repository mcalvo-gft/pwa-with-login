import { createContext } from 'react';
export interface User {
  lastSignInTime: Date;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
}

// const initAuthContext: AuthContextType = {
//   isLoggedIn: false,
//   user: null,
// };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };
