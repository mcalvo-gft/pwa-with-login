import * as firebase from 'services/firebase.service';

export const login = (email: string, password: string): Promise<void | Error> => {
  return firebase.login(email, password).then(() => Promise.resolve());
};

export const logout = (): void => {
  return firebase.logout();
};

export const onAuthStateChanged = firebase.onAuthStateChanged;
