import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDD-VqSLzhNLActLlmsRqM5D3n0BWRXFZY',
  authDomain: 'pwa-bbva.firebaseapp.com',
  databaseURL: 'https://pwa-bbva.firebaseio.com',
  projectId: 'pwa-bbva',
  storageBucket: 'pwa-bbva.appspot.com',
  messagingSenderId: '335050770784',
  appId: '1:335050770784:web:16a25801cb55bd6b78f605',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export const login = (email: string, password: string): Promise<firebase.auth.UserCredential> => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = (): void => void auth.signOut();

export const onAuthStateChanged = auth.onAuthStateChanged.bind(auth);

export type UserCredential = firebase.auth.UserCredential;
