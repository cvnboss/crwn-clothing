import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDSDxmGfZE6qRnNJfjvzX2lZDldIKpCej4',
  authDomain: 'crwn-db-f1824.firebaseapp.com',
  databaseURL: 'https://crwn-db-f1824.firebaseio.com',
  projectId: 'crwn-db-f1824',
  storageBucket: 'crwn-db-f1824.appspot.com',
  messagingSenderId: '80088901490',
  appId: '1:80088901490:web:7089609bc2bf71f6715feb',
  measurementId: 'G-PN9NV983K8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWihGoogle = () => auth.signInWithPopup(provider);

export default firebase;
