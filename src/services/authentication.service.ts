import * as firebase from 'firebase/app';
import * as FirebaseService from 'services/firebase.service';
import { User } from 'types/types';

export const login = (email: string, password: string): Promise<void | Error> => {
  return FirebaseService.login(email, password)
    .then(() => Promise.resolve())
    .catch((e: Error) => {
      return Promise.reject(new Error(e.message));
    });
};

export const logout = (): void => {
  return FirebaseService.logout();
};

export const onAuthStateChanged = (handle: (user: User | null) => void): void => {
  FirebaseService.onAuthStateChanged((firebaseUser: firebase.User | null) => {
    if (firebaseUser) {
      const user = {
        name: firebaseUser.displayName,
        avatar: firebaseUser.photoURL,
        lastSignInTime: new Date(firebaseUser.metadata.lastSignInTime as string),
      };
      handle(user);
    } else {
      handle(null);
    }
  });
};
