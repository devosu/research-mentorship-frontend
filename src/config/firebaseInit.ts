// ./src/config/firebaseInit.ts
//
// Firebase initialization module.

// Firebase type imports.
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

// Firebase essential imports.
import { config } from 'dotenv-safe';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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

// Firestore configuration, export for testing.
 export const firestoreDatabaseID 
  = process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_ID || 'dangerously-unsafe-temp-dev-database';

// Modularized Firebase initialization.
export function initFirebaseApp(): { fbApp: FirebaseApp, fbAuth: Auth, fbStore: Firestore} {
  const fbApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  const fbAuth = getAuth(fbApp);
  const fbStore = getFirestore(fbApp, firestoreDatabaseID);

  return { fbApp, fbAuth, fbStore };
}

// Backwards compatible exports, allowing for:
// import { fbApp, fbAuth, fbStore } from '@config/firebaseInit';
export const { fbApp, fbAuth, fbStore } = initFirebaseApp();
