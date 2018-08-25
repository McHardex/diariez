import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCuKwpGf23Pex6lj3ZP2vJaO0ubME1c4xQ",
  authDomain: "diariez-27fa1.firebaseapp.com",
  databaseURL: "https://diariez-27fa1.firebaseio.com",
  projectId: "diariez-27fa1",
  storageBucket: "",
  messagingSenderId: "826976183999"
};

firebase.initializeApp(config);
export const authRef = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();

