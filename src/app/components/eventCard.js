// ./src/app/components/eventCard.js
//
// Tutorial on how to write a sample component.

import React from 'react';
import './eventCard.css';
import blank_image from './blank_event_image.png';
import default_club_icon from './default_club_icon.png';
import Image from 'next/image';

export default function EventCard({eventName, date, location, clubName}) {
  return (
    <div className="event-card">
        <Image src={blank_image} alt='' className="event-image"/>
        <div className="basic-information-block">
            <h1>{eventName}</h1>
            <p>{date} @ Time</p>
            <p>{location}</p>
        </div>
        <div className="organization-block">
            <Image src={default_club_icon} alt='Club Icon' className="club-icon"/>
            <p>{clubName}</p>
        </div>
    </div>
  );
}
