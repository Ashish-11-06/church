import React from 'react';
import '../Style/Head2.css'; // Ensure this path is correct for your project
import saintImage from '../Assets/churchimg.jpeg'; // Replace with your actual image path

const QuoteSection = () => {
  return (
    <div className="quote-section">
      <img src={saintImage} alt="Saint" className="saint-image" />
      <blockquote className="quote-text">
        “Take Lord, and receive all my liberty, my memory, my understanding, and my entire will, all I have and call my own. 
        You have given all to me. To you, Lord, I return it. Everything is yours; do with it what you will. 
        Give me only your love and your grace, that is enough for me.”
      </blockquote>
    </div>
  );
};

export default QuoteSection;
