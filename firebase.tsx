import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT0d1o6X37RfIUaRzEDcTOetNei2f5glU",
  authDomain: "occ-application.firebaseapp.com",
  projectId: "occ-application",
  storageBucket: "occ-application.firebasestorage.app",
  messagingSenderId: "999400365714",
  appId: "1:999400365714:web:806d0352d0614699b3904b",
  measurementId: "G-LGE3NGXWX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };