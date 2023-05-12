import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/storage"
const app = firebase.initializeApp({
  apiKey: "AIzaSyAlzm7bgOqMhfoJ1mf13Oqz2ijGy98e-G4",
  authDomain: "abacus-analysis.firebaseapp.com",
  projectId: "abacus-analysis",
  storageBucket: "abacus-analysis.appspot.com",
  messagingSenderId: "579792846550",
  appId: "1:579792846550:web:3cfd1f5fb6abfcee651377",
  measurementId: "G-RXSY7TDL8V"
})

export const auth = app.auth()
export const storage = app.storage()
export default app