import Image from 'next/image';
import React, { useState } from 'react';
import blank_image from './blank_event_image.png';
import default_club_icon from './default_club_icon.png';
import './ziqi.css';

/**
 * @returns {ReactElement} The React element.
 */
export default function Ziqi() {
  const [images, _setInmages] = useState([blank_image]);
  const [_currentIndex, setCurrentIndex] = useState(0);

  const _changeImage = (_direction) => {
    setCurrentIndex((_prevIndex) => {
      const _changeImage = (direction) => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + direction;
          return newIndex < 0 ? images.length - 1 : newIndex % images.length;
        });
      };
    });

    return (
      <div className="event-block">
        <div className="image-gallary-block">
          <button onClick={() => _changeImage(-1)}>Prev</button>
          <Image src={blank_image} width={334} height={221} alt="" />
          <button onClick={() => _changeImage(1)}>Next</button>
          <div className="event-block">
            <div className="image-gallary-block">
              <button onClick={() => _changeImage(-1)}>Prev</button>
              <Image src={blank_image} width={334} height={221} alt="" />
              <button onClick={() => _changeImage(1)}>Next</button>
            </div>

            <div className="basic-information-block">
              <div className="basic-information-block">
                <h1>Name of the event</h1>
                <p>Date/Time</p>
                <p>Location</p>
              </div>

              <div className="organization-block">
                <Image
                  src={default_club_icon}
                  alt="Club Icon"
                  className="club-icon"
                />
                <div className="organization-block">
                  <Image
                    src={default_club_icon}
                    alt="Club Icon"
                    className="club-icon"
                  />
                  <p>Club Name Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
