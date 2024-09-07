import React from 'react';
import '../Style/Events.css'; // Adjust the path as needed

import groto from '../Assets/groto.jpeg';

const Events = () => (
  <div className="position-relative">
    <img
      src={groto}
      alt="Groto"
      className="img-fluid"
    />
  <div className="title">
<h1 className="event-title">हरेगाव यात्रा महोत्सव</h1>
</div>
    <div className="text-overlay">
     
      <h4 className="event-subtitle">The Feast Of Immaculate Virgin Mary</h4>
      <p className="event-description">पवित्र निष्कलंक मारियामतेचा सण</p>
      <h3 className="event-date">14 Sept 2024</h3>
    </div>
  </div>
);

export default Events;
