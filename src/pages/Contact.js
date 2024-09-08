import React from 'react';
import '../Style/Contact.css';

const ContactUs = () => {
  return (
    <div className='contact' style={{ padding: '20px' }}>
      <div className='contact-info'>
        <h2 style={{ color: '#800000', marginBottom: '10px' }}>Contact us</h2>
        <p style={{ fontWeight: 'bold' }}>St. Teresa church Harigaon</p>
        <section className='staff'>
          <h2>Our Community 2024</h2>
          <ul>
            <li><strong>Fr. Dominic Rosario-</strong>: Parish Priest</li>
            <li><strong>Fr. Santan Rodrigues-</strong>: Assistant Parish Priest</li>
            <li><strong>Fr. Francis Ohol-</strong>: Principal</li>
            <li><strong>Br. Maxwell Kharja-</strong>: Hostel incharge</li>
          </ul>
        </section>
        <p>
          <strong>Address:</strong> St. Teresa Church<br />
          Harigaon, Shrirampur<br />
          A. nagar   Pin : 413718
        </p>
        <p>
          <strong>Phone:</strong> 9604289148 (Parish Priest)
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:[Dominicrosario-lj8nd@.com]">Dominicrosario-lj8nd@.com</a>
        </p>
      </div>
      <div className='map'>
        <iframe
          title="St. Teresa Church Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60570.21536337254!2d74.67322170941632!3d19.668313362453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc89c82ac59623%3A0x6f69ec43083f9349!2sSt%20Teresa%20Church!5e0!3m2!1sen!2sin!4v1693995027714!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
