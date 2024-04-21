import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBomBXM4fam-BbdBeoYX4uxdEmkdumnjnY',
  authDomain: 'myfaq-d577f.firebaseapp.com',
  databaseURL:
    'https://myfaq-d577f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'myfaq-d577f',
  storageBucket: 'myfaq-d577f.appspot.com',
  messagingSenderId: '257817619931',
  appId: '1:257817619931:web:5564fccd52e7bae4338bfe',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
