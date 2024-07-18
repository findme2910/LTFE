// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyDmJUDJGX08byBKPe30OHBPd2YV6skK6Bo",
   authDomain: "son-freelancer.firebaseapp.com",
   projectId: "son-freelancer",
   storageBucket: "son-freelancer.appspot.com",
   messagingSenderId: "150254902165",
   appId: "1:150254902165:web:8f8e900f29eb5e91f5b49c",
   measurementId: "G-STJCBHD2L8"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
