import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from "./firebaseInit";

export async function submitMenteeApplication(researchField: string, uid: string) {
    console.log('submitting');
    try {
        const doc = await addDoc(collection(db, "applications"), {
            adminApproved: false,        
            currentResearchField: '',
            currentResearchFieldDescription: '',
            desiredResearchField: researchField,
            type: 'mentee',
            userRef: `/users/${uid}`,
        });
        console.log(`Successful push: ${doc.id}`);   
    }
    catch (e) {
        console.log(e);
    }
}

export async function createMentorUserObject(firstName: string, lastName: string, email: string) {
    console.log('submitting');
    try {
        const doc = await addDoc(collection(db, "users"), {
            calendarSchedulerLink: 'https://www.google.com',  // needs to be dynamic
            creationTimestamp: serverTimestamp(),
            currentMajor: '', 
            emailAddress: email,
            firstName: firstName,
            graduationYear: '',
            lastName: lastName,
            personalBio: 'Hello! This is a sample bio', // needs to be dynamic
            profilePictureLink: '', 
            type: 'mentor',
        });
        console.log(`Successful push: ${doc.id}`);   
    }
    catch (e) {
        console.log(e);
    }
}

export async function createMenteeUserObject(firstName: string, lastName: string, email: string) {
    console.log('submitting');
    try {
        const doc = await addDoc(collection(db, "users"), {
            calendarSchedulerLink: '',
            creationTimestamp: serverTimestamp(),
            currentMajor: 'Computer Science and Engineering', // needs to be dynamic
            emailAddress: email,
            firstName: firstName,
            graduationYear: 2020, // needs to be dynamic
            lastName: lastName,
            personalBio: '',
            profilePictureLink: '',
            type: 'mentee',
        });
        console.log(`Successful push: ${doc.id}`);   
    }
    catch (e) {
        console.log(e);
    }
}