import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBys_GWeive1wtAG6p6cDE76oLSBea8t70',
  authDomain: 'music-app-57bdf.firebaseapp.com',
  projectId: 'music-app-57bdf',
  storageBucket: 'music-app-57bdf.appspot.com',
  // messagingSenderId: '798795549991',
  appId: '1:798795549991:web:8ff4117cb8d8791df56d02',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
