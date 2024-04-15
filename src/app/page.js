// ./src/app/page.js
//
// Homepage for the event feed project.

// Next essential imports.
'use client';
import Link from 'next/link';
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {

  const addEvent = () =>{
    console.log('beginning creation of document');
    try {
        addDoc(collection(db, 'events'), {
                event_name: document.getElementById('event').value,
                date: document.getElementById('date').value,
                location: document.getElementById('location').value,
                club_name: document.getElementById('club').value,
        }).then((res) => {
          console.log('done here');
        });
    } catch (e) {
        console.log("There was an error adding the document");
        console.error("Error adding document: ", e);
    }
  }
  return (
    <main>
      <div>
        <p>Welcome to home page for event feed!</p>
      </div>
      <Link href="/yakob">Go to Yakob&apos;s Page</Link>
      <br />
      <Link href="/ziqi">Go to Ziqi&apos;s Page</Link>
      <br />
      <input type="text" id="event" placeholder="Event"></input>
      <input type="date" id="date"></input>
      <input type="text" id="location" placeholder="Location"></input>
      <input type="text" id="club" placeholder="Club Name"></input>
      <button onClick={() => addEvent()}>Submit</button>
    </main>
  );
}
