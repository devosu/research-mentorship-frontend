// ./src/app/page.js
//
// Homepage for the event feed project.

// Next essential imports.
'use client';
import { db } from '@firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import Link from 'next/link';

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {
  // Function to add event to Firestore.
  const addEvent = () => {
    console.log('beginning creation of document');
    try {
      // Upload new event document to Firestore.
      addDoc(collection(db, 'events'), {
        event_name: document.getElementById('event').value,
        date: document.getElementById('date').value,
        location: document.getElementById('location').value,
        club_name: document.getElementById('club').value,
      }).then((_res) => {
        console.log('Document successfully written to Firestore.');
      });

      // Gracefully handle errors.
    } catch (e) {
      console.log('There was an error adding the document');
      console.error('Error adding document: ', e);
    }
  };

  return (
    <main>
      <div>
        <p>Welcome to home page for event feed!</p>
      </div>
      <Link href="/yakob">Go to Yakob&apos;s Page</Link>
      <br />
      <Link href="/ziqi">Go to Ziqi&apos;s Page</Link>
      <br />
      <input
        type="text"
        id="event"
        data-testid="event-input"
        placeholder="Event"
      ></input>
      <input type="date" id="date" data-testid="date-input"></input>
      <input
        type="text"
        id="location"
        data-testid="location-input"
        placeholder="Location"
      ></input>
      <input
        type="text"
        id="club"
        data-testid="club-input"
        placeholder="Club Name"
      ></input>
      <button onClick={() => addEvent()} data-testid="submit-button">
        Submit
      </button>
    </main>
  );
}
