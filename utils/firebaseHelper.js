import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

let firebaseApp;

export const getFirebaseApp = () => {
  // If the Firebase app is already initialized, return it
  if (firebaseApp) {
    return firebaseApp;
  }

  // Firebase configuration
   const firebaseConfig = {
    apiKey: "AIzaSyD4cb4svDyg0tC598OxSmXo9BXvFyphhMc",
    authDomain: "tcdi-f31ba.firebaseapp.com",
    projectId: "tcdi-f31ba",
    storageBucket: "tcdi-f31ba.appspot.com",
    messagingSenderId: "30637319676",
    appId: "1:30637319676:web:a34f223a41c56fc6257e79",
    measurementId: "G-LF4TNCJB4X"
    };

  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  // Initialize Firebase Auth with React Native persistence
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  // Store the initialized app to avoid reinitialization
  firebaseApp = app;

  return app;
};