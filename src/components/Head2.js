import React from 'react';
import '../Style/Head2.css'; // Ensure this path is correct for your project
import groto from '../Assets/groto.jpeg'; // Replace with your actual image path

const QuoteSection = () => {
  return (
    <div className="quote-section">
     
      {/* <blockquote className="quote-text">
      "Hail Mary, full of grace, the Lord is with thee;
blessed art thou among women,
and blessed is the fruit of thy womb, Jesus."      </blockquote> */}
<img src={groto} alt="Saint" className="saint-image" />

<blockquote className="quote-text">
      "Holy Mary, Mother of God,
pray for us sinners, now and at the hour of our death. Amen."      </blockquote>
    </div>
  );
};

export default QuoteSection;
