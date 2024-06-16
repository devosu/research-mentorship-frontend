// ./src/config/firebaseInit.ts
//
// Firebase initialization module.

// Firebase type imports.
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';

// Firebase essential imports.
import { config } from 'dotenv-safe';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Load environment variables.
config();

// Firebase configuration.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Modularized Firebase initialization.
export function initFirebaseApp(): {
  fbApp: FirebaseApp,
  fbAuth: Auth,
} {
  const fbApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const fbAuth = getAuth(fbApp);

  return ({
    fbApp,
    fbAuth,
  });
}

// Backwards compatible exports, allowing for:
// import { fbApp, fbAuth } from '@config/firebaseInit';
export const { fbApp, fbAuth } = initFirebaseApp();
