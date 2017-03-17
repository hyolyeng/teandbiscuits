import * as firebase from "firebase";

class Firebase {

  /**
   * Initialises Firebase
   */
  static initialise() {
    firebase.initializeApp({
        apiKey: "AIzaSyCtTGzMgdMr7a4Z0Z_mfWFb8k07hFFFF3w",
        authDomain: "teandbiscuits-dc16f.firebaseapp.com",
        databaseURL: "https://teandbiscuits-dc16f.firebaseio.com",
        storageBucket: "teandbiscuits-dc16f.appspot.com",
    });
  }

}

module.exports = Firebase;