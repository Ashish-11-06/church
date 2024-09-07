import '../Style/Home.css'
import React from 'react';
import Events from './Events'
import Contact from './Contact';

import churchImage from '../Assets/church3.png'
import groto from '../Assets/groto.jpeg'

const HomePage = () => (
  <main className='home'>
     <div className=" text-white p-2 d-flex align-items-center">
     <img
      src={groto}
      alt="Groto"
      style={{ maxHeight: '100px', width: 'auto', marginRight: '15px' }} // Adjust maxHeight and marginRight as needed
      />
      <div className=" text-white  align-items-center">
      <h2>st. Teresa Church Harigaon</h2>
      <p>जो माझ्या पुत्राचा सन्मान करील, त्यांच्या ईच्छा मी पूर्ण करील. </p>
      </div>
   </div>
   
   <img
      src={churchImage}
      alt="Church"
      style={{ maxHeight: '100px', width: 'auto', marginRight: '15px' }} // Adjust maxHeight and marginRight as needed
      />
  <Events />
  <Contact />
  </main>
);

export default HomePage;
