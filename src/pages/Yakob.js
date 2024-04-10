import '../static/yakob.css';
import React, { useState } from 'react';

export default function Yakob() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleAuth = () => {
    if (isSignedIn) {
      // Replace with your sign out logic
      alert('Sign out logic here.');
    } else {
      // Replace with your sign in logic
      alert('Sign in logic here.');
    }
    setIsSignedIn(!isSignedIn);
  };

  return (
    <>
      <div className="main-header logo">
        <img
          src="/logo-521x521.png"
          alt="event-feed-project logo"
          className="logo"
        />
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            {/* These links should point to valid routes or be replaced with buttons 
            if they are placeholders */}
            <li>
              <a href="/groups">Groups</a>
            </li>
            <li>
              <a href="/events">Events</a>
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
