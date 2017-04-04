import firebase from 'firebase';

try {
	firebase.initializeApp({
    apiKey: "AIzaSyCtTGzMgdMr7a4Z0Z_mfWFb8k07hFFFF3w",
    authDomain: "teandbiscuits-dc16f.firebaseapp.com",
    databaseURL: "https://teandbiscuits-dc16f.firebaseio.com",
    storageBucket: "teandbiscuits-dc16f.appspot.com",
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const root = firebase.database().ref();

export default root;