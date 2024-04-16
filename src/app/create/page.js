// ./src/create/page.js
//
// Tutorial on how to write a sample component.

'use client';
import React from 'react';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from "firebase/firestore";


export default function CreateEvent() {
  const addEvent = () =>{
    try {
        addDoc(collection(db, 'events'), {
                event_name: document.getElementById('event').value,
                date: document.getElementById('date').value,
                location: document.getElementById('location').value,
                club_name: document.getElementById('club').value,
        });
    } catch (e) {
        console.log("There was an error adding the document");
        console.error("Error adding document: ", e);
    }
  }

  return (
    <main>
      <input type="text" id="event" placeholder="Event"></input>
      <input type="date" id="date"></input>
      <input type="text" id="location" placeholder="Location"></input>
      <input type="text" id="club" placeholder="Club Name"></input>
      <button onClick={() => addEvent()}>Submit</button>
    </main>
  );
}
