import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function addEvent(event, date, location, name) {
    console.log('beginning creation of document');
    try {
        await addDoc(collection(db, 'events'), {
                event_name: event,
                date: date,
                location: location,
                club_name: name,
        });
        console.log('done here');
    } catch (e) {
        console.log("There was an error adding the document");
        console.error("Error adding document: ", e);
    }
}