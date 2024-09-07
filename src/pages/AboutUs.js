import React from 'react';
import '../Style/AboutUs.css'; // Import a CSS file for styling

const AboutUs = () => {
  return (
    <div className='about-us'>
      <h1>About Us</h1>
      <section className='mission'>
        <h2>Our Mission</h2>
        <p>
          Our church is dedicated to spreading the message of love, hope, and faith. We strive to serve our community with compassion and integrity, guiding individuals on their spiritual journey and providing support to those in need.
        </p>
      </section>
      
      <section className='history'>
        <h2>Our History</h2>
        <p>
          Founded in [Year], our church has been a cornerstone of the community, offering a place for worship, fellowship, and support. Over the years, we have grown and evolved, always staying true to our core values of service, love, and faith.
        </p>
      </section>

      <section className='staff'>
        <h2>Meet Our Staff</h2>
        <ul>
          <li><strong>Fr. John Doe</strong> - Senior Pastor</li>
          <li><strong>Fr. Jane Smith</strong> - Associate Pastor</li>
          <li><strong>Mrs. Emily Johnson</strong> - Director of Music</li>
          <li><strong>Mr. Michael Brown</strong> - Youth Minister</li>
        </ul>
      </section>

      <section className='services'>
        <h2>Our Services</h2>
        <ul>
          <li>Sundays: 9:00 AM - Worship Service</li>
          <li>Wednesdays: 7:00 PM - Bible Study</li>
          <li>Saturdays: 10:00 AM - Community Outreach</li>
        </ul>
      </section>

      <section className='contact'>
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> 123 Church Street, City, State, ZIP
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@ourchurch.org
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
