import * as firebase from 'services/firebase.service';

export const login = (email: string, password: string): Promise<void | Error> => {
  return firebase.login(email, password);
};

export const logout = (): Promise<void | Error> => {
  return firebase.logout();
};

export const onAuthStateChanged = firebase.onAuthStateChanged;
