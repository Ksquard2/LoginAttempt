import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            // If email is already in use, try signing in instead
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                return userCredential.user;
            } catch (signInError) {
                // If sign-in fails, rethrow the original error
                throw error;
            }
        }
        throw error;
    }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};