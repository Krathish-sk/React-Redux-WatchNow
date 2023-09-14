import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBkEArb34LAMxXya6lmEPDGoVJYxyIDYzs",
  authDomain: "watchnow-react-redux.firebaseapp.com",
  projectId: "watchnow-react-redux",
  storageBucket: "watchnow-react-redux.appspot.com",
  messagingSenderId: "250737548292",
  appId: "1:250737548292:web:832b21599e97d9b268a951",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
