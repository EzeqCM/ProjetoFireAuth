import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//const firebaseConfig 
const firebaseConfig = {
  apiKey: "AIzaSyD9zxxkXLrwVfJHT_KZJmy0O-6aIWQBqSA",
  authDomain: "aula-0710.firebaseapp.com",
  projectId: "aula-0710",
  storageBucket: "aula-0710.appspot.com",
  messagingSenderId: "189609437714",
  appId: "1:189609437714:web:c83775fe3ad69f9e1646cb"
};
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
