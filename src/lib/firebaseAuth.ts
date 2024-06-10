import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebaseInit';

/* Sign In Functions */
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Error signing in with Google: ", error);
    }
}

export async function signInWithEmail(email: string, password: string) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in with email and password: ", error);
    }
}


/* Sign Up Functions */
export async function signUpWithEmail(email: string, password: string) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing up with email and password: ", error);
    }
}


/* Sign Out Functions */
export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google: ", error);
    }
}