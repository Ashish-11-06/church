import React from 'react';
import '../Style/Events.css'; // Adjust the path as needed
import Temp from '../Assets/temp.jpg';
import ChurchImg from '../Assets/churchimg.jpeg';
import Temp1 from '../Assets/Temp1.jpg';
import Temp2 from '../Assets/temp2.jpg'

const Events = () => (
  <main>
    <div className="position-relative">
      <img
        src={ChurchImg}
        alt="Church"
        className="img-fluid church-img"
      />
      <div className="title">
        <h1 className="event-title">७६ वा हरेगाव यात्रा महोत्सव</h1>
      </div>
      <div className="text-overlay">
        <h4 className="event-subtitle">The Feast Of Immaculate Virgin Mary</h4>
        <p className="event-description">पवित्र निष्कलंक मारियामतेचा सण</p>
        <h3 className="event-date">14 Sept 2024</h3>
      </div>
    </div>
    <img
      src={Temp}
      alt="Temp"
      className="img-fluid temp-img"
    />
     {/* <img
      src={Temp1}
      alt="Temp"
      className="img-fluid temp-img"
    />
     <img
      src={Temp2}
      alt="Temp"
      className="img-fluid temp-img"
    /> */}
  </main>
);

export default Events;
