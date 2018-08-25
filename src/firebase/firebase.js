import firebase from 'firebase';
import api from '../safety'

const config = {
  api,
  authDomain: "diariez-27fa1.firebaseapp.com",
  databaseURL: "https://diariez-27fa1.firebaseio.com",
  projectId: "diariez-27fa1",
  storageBucket: "",
  messagingSenderId: "826976183999"
};

firebase.initializeApp(config);
export const authRef = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();

