import React from 'react';
import '../Style/Home.css';
import Events from './Events';
import churchImage from '../Assets/church3.png';
import ContactUs from './Contact';

const HomePage = () => (
  <main className='home'>
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
    <div className="marquee">
      <p>Festival is on 14 September 2024</p>
    </div>
    <div className="marquee">
      <p>सण १४ सप्टेंबर २०२४ रोजी आहे</p>
    </div>
    {/* YouTube Channel Section */}
    <div className="youtube-channel my-3 text-center">
      <h3>Visit Our YouTube Channel</h3>
      <p>Subscribe to our channel to watch all live events and stay updated with our latest content!</p>
      <a
        href="https://www.youtube.com/@DominicRosario-lj8nd" // Replace with your actual YouTube channel URL
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Watch on YouTube
      </a>
    </div>

    <Events />
    <ContactUs></ContactUs>
  </main>
);

export default HomePage;
