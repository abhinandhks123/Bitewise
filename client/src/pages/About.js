import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Bitewise</h1>
      <p className="about-intro">
        At <strong>Bitewise</strong>, we believe food is more than fuel — it’s
        the foundation of health, energy, and well-being. Our mission is to help
        you make informed food choices by providing accurate, AI-powered meal
        analysis in seconds.
      </p>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Bitewise was created by a group of nutrition enthusiasts and tech
          innovators who saw the need for a simple, reliable way to understand
          what’s really in your food. Whether you’re tracking calories, building
          muscle, or simply aiming for a healthier lifestyle, Bitewise gives you
          the data you need to succeed — without guesswork.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li> Image-based meal analysis for instant results</li>
          <li> Detailed breakdown of calories, protein, carbs, and fats</li>
          <li> Expert nutrition tips and healthy recipes</li>
          <li> Blog articles backed by science</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          We combine advanced AI technology with trusted nutrition knowledge to
          give you insights that are both fast and accurate. Every analysis
          comes with a clear disclaimer so you can make informed decisions, not
          blind guesses.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is simple — to make nutrition knowledge accessible to
          everyone, regardless of their background, cooking skills, or busy
          lifestyle. We want you to feel confident about what you eat and how it
          impacts your health.
        </p>
      </div>

      <p className="about-disclaimer">
        ⚠️ Disclaimer: Bitewise provides nutrition estimates based on AI
        analysis and available data. Values may vary depending on food
        preparation, portion sizes, and other factors.
      </p>
    </div>
  );
};

export default About;
