import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlALkbqUVAkobYvUVcQY-9BHSXjZA30xI',
  authDomain: 'netflix-cartoons.firebaseapp.com',
  projectId: 'netflix-cartoons',
  storageBucket: 'netflix-cartoons.appspot.com',
  messagingSenderId: '701576982405',
  appId: '1:701576982405:web:b4a6eb89470ec21a191eec'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
