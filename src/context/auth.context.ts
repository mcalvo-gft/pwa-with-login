import { createContext } from 'react';
import { User } from 'types/types';

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
