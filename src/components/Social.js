import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import '../Style/Social.css'; // Make sure this path is correct

const Social = () => (
  <section className='social'>
    <div className="social-container">
      {/* YouTube Channel Section */}
      <div className="social-item youtube-channel text-center">
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

      {/* Instagram Section */}
      <div className="social-item instagram-channel text-center">
        <h3>Follow Us on Instagram</h3>
        <p>Stay updated with our latest photos and stories!</p>
        <a
          href="https://www.instagram.com/your_instagram_handle" // Replace with your actual Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary d-flex align-items-center justify-content-center"
        >
          <FaInstagram style={{ marginRight: '8px' }} /> Follow on Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Social;
