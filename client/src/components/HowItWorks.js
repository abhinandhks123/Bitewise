import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how">
      <h3>How it works</h3>
      <div className="steps">
        <div className="card">
          <h4>1. Upload Your Food Photo</h4>
          <p>Take or upload a photo of your meal</p>
        </div>
        <div className="card">
          <h4>2. AI Detects Your Food</h4>
          <p>Our AI engine identifies the dish and estimates the serving size.</p>
        </div>
        <div className="card">
          <h4>3. See Nutrition Facts</h4>
          <p>Get facts: calories, protein, fats, carbs, fiber, and more.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
