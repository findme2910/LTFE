import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
   apiKey: 'AIzaSyDmJUDJGX08byBKPe30OHBPd2YV6skK6Bo',
   authDomain: 'son-freelancer.firebaseapp.com',
   projectId: 'son-freelancer',
   storageBucket: 'son-freelancer.appspot.com',
   messagingSenderId: '150254902165',
   appId: '1:150254902165:web:8f8e900f29eb5e91f5b49c',
   measurementId: 'G-STJCBHD2L8'
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
export const db = getFirestore(app)
