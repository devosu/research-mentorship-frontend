// ./src/create/page.js
//
// Definition for the create page at url /create.

// Next essential imports.
import React from 'react';

// Local imports.
import { addEvent } from '@firebase/firestore';

/**
 * @returns {JSX.Element} the create event page.
 */
export default function CreateEvent() {
  return (
    <main>
      <input type="text" id="event" placeholder="Event"></input>
      <input type="date" id="date" data-testid="date-input"></input>
      <input type="text" id="location" placeholder="Location"></input>
      <input type="text" id="club" placeholder="Club Name"></input>
      <button onClick={() => addEvent()}>Submit</button>
    </main>
  );
}
