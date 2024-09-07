import React from 'react';
import Events from './Events'
import Contact from './Contact';

const HomePage = () => (
  <main>
    <div className="container">
    <h2>Welcome to Church Name</h2>
    <p>Here you can find information about our services, events, and more.</p>
  </div>
  <Events />
  <Contact />
  </main>
);

export default HomePage;
