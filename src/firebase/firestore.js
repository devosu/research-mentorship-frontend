// ./src/firebase/firestore.js
//
// Firestore database operations.

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Add an event to the Firestore database.
 *
 * @param {string} event - The name of the event.
 * @param {string} date - The date of the event.
 * @param {string} location - The location of the event.
 * @param {string} name - The name of the club hosting the event.
 */
export async function addEvent(event, date, location, name) {
  console.log('beginning creation of document');
  try {
    const eventsRef = collection(db, 'events');
    const docRef = await addDoc(eventsRef, {
      event_name: event,
      date: date,
      location: location,
      club_name: name,
    });
    console.log('event added successfully.');
    // Return the auto-generated ID of the event.
    return docRef.id;

    // Gracefully handle error adding the event fails.
  } catch (e) {
    console.log('There was an error adding the document');
    console.error(`Error adding document: ${e}`);
  }
}
