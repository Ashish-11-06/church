import React from 'react';
import '../Style/Head2.css'; // Ensure this path is correct for your project
import groto from '../Assets/groto.jpeg'; // Replace with your actual image path

const QuoteSection = () => {
  return (
    <div className="quote-section">
     
     
<blockquote className="quote-text">
"Let us run to Mary and as her little children cast ourselves into her arms with a perfect confidence."    </blockquote>

 {/* <blockquote className="quote-text">
      "Hail Mary, full of grace, the Lord is with thee;
blessed art thou among women,
and blessed is the fruit of thy womb, Jesus."      </blockquote> */}
<img src={groto} alt="Saint" className="saint-image" />

    </div>
  );
};

export default QuoteSection;
