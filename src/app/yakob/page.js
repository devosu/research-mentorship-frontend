// ./src/app/yakob/page.js
//
// Yakob's page for the event feed project.
'use client';

// Next/React essential imports.
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Style imports.
import './yakob.css';

export default function Yakob() {
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

  return (
    <>
      <div className="main-header logo">
        <Image
          src="/logo-512x512.png"
          alt="event-feed-project logo"
          className="logo"
          width={150}
          height={150}
        />
        <nav>
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            {/* These links should point to valid routes or be replaced with buttons 
            if they are placeholders */}
            <li>
              <Link href="/groups">Groups</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-button">
          <button onClick={toggleAuth}>
            {isSignedIn ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
      <div className="sub-header">
        <div className="events-counter">Events</div>
        <div className="search-events">
          <input type="search" placeholder="Search Events" />
          <button>🔍</button>
        </div>
      </div>
    </>
  );
}
