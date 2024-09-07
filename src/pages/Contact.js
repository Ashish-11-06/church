import React from 'react';

const ContactUs = () => {
  return (
    <div style={{ display: 'flex', padding: '20px', backgroundColor: '#fdf7e2' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2 style={{ color: '#800000', marginBottom: '10px' }}>Contact us</h2>
        <p style={{ fontWeight: 'bold' }}>St. Teresa Church Parish Priest</p>
        <p>
          <strong>Address:</strong> St. Teresa Church<br />
          Harigaon, Shrirampur<br />
          A. nagar   Pin : 413718
        </p>
        <p>
          <strong>Phone:</strong> [Update Phone Number if applicable]
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:[UpdateEmail@example.com]">[UpdateEmail@example.com]</a>
        </p>
      </div>
      <div style={{ flex: 1 }}>
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
