import firebase from 'firebase';
import config from '../../safety'

firebase.initializeApp(config);
export const authRef = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();

