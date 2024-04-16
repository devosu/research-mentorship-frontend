// ./src/app/page.js
//
// Homepage for the event feed project.

// Next essential imports.
'use client';
import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import EventCard from './components/eventCard';
import { useState, useEffect } from "react";
import './globals.css';
import Image from 'next/image';
import logo from './logo.png';
import { Inter } from 'next/font/google';
import 'material-symbols/rounded.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * @returns {JSX.Element} Homepage for the event feed project.
 */
export default function Homepage() {
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [inputClassName, setClassName] = useState('');
  const [buttonClassName, setButtonClassName] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleAuth = () => {
    if (isSignedIn) {
      // Replace with your sign out logic
      // alert('Sign out logic here.');
      console.log('Sign out logic here.');
    } else {
      // Replace with your sign in logic
      // alert('Sign in logic here.');
      console.log('Sign in logic here.');
    }
    setIsSignedIn(!isSignedIn);
  };

  useEffect(() => {
    setClassName(`event-search ${inter.className}`);
    setButtonClassName(`auth-button ${inter.className}`);
    getEvents();
  }, [events]);

  // https://firebase.google.com/docs/firestore/query-data/order-limit-data

  const getEvents = () => {
    const renderedComponents = [];
    getDocs(query(collection(db, "events"), orderBy("date", "asc"))).then((q) => {
      q.forEach((doc) => {
        renderedComponents.push(<EventCard eventName={doc.data().event_name} date={doc.data().date} location={doc.data().location} clubName={doc.data().club_name} />);
      });
      if (!loaded) setEvents(renderedComponents);
      setLoaded(true);
    });
  }

  return (
    <main>
      <div className="main-header">
        <Image
          src={logo}
          alt="event-feed-project logo"
          className="logo"
          width={150}
          height={150}
        />
        <div class="input-container">
          <span class="material-symbols-rounded search-icon">search</span>
          <input type='text' class={inputClassName.length == 0 ? 'event-search' : inputClassName} placeholder="Search Events"></input>
        </div>
        <button onClick={toggleAuth} className={buttonClassName.length == 0 ? 'auth-button' : buttonClassName}>
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
      <div class="events-grid">
        {events}
      </div>
    </main>
  );
}
