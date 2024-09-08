import React from 'react';
import '../Style/Home.css';
import Events from './Events';
import churchImage from '../Assets/church3.png';
import ContactUs from './Contact';
import Head2 from '../components/Head2';
import Social from '../components/Social';

const HomePage = () => (
  <main className='home'>
    <div className="marquee">
      <p>Festival is on 14 September 2024.    सण १४ सप्टेंबर २०२४ रोजी आहे</p>
    </div>
    <div className="text-white p-2 d-flex align-items-center">
      <img
        src={churchImage}
        alt="Church"
        style={{ maxHeight: '100px', width: 'auto', marginRight: '15px' }}
      />
      <div className="text-white align-items-center">
        <h2>St. Teresa Church Harigaon</h2>
        <p>जो माझ्या पुत्राचा सन्मान करील, त्यांच्या ईच्छा मी पूर्ण करील.</p>
      </div>
    </div>

    <Head2 />

    <Events />

<Social/>
    <ContactUs />
  </main>
);

export default HomePage;
