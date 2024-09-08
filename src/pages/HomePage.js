import React from 'react';
import '../Style/Home.css';
import Events from './Events';
import churchImage from '../Assets/church3.png';
import ContactUs from './Contact';
import Head2 from '../components/Head2';
import Social from '../components/Social';

const HomePage = () => (
  <main className='home align-items-center'>
    
    <div className="marquee">
      <p>Festival is on 14 September 2024.    सण १४ सप्टेंबर २०२४ रोजी आहे</p>
    </div>
   <section className='Head'>

   <div className="text-white p-2 d-flex align-items-center justify-content-center">
  <img
    src={churchImage}
    alt="Church"
    style={{ maxHeight: '100px', width: 'auto', marginRight: '15px' }}
  />
  <div className="text-white d-flex flex-column align-items-center">
    <h2 className="mb-2">St. Teresa Church Harigaon</h2>
    <p className="text-center">"जे माझा सन्मान करतील, त्यांच्या ईच्छा मी पूर्ण करीन."</p>
  </div>
</div>


   </section>

    <Head2 />

    <Events />

<Social/>
    <ContactUs />
  </main>
);

export default HomePage;
