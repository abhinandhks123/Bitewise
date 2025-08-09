import React from 'react';
import '../styles/WhyUse.css';
import { FiArrowRight } from "react-icons/fi"; 

const WhyUse = () => {
  return (
    <section className="why">
      <h3>Why Use Bitewise</h3>
      <ul>
        <li><FiArrowRight />   No more manual calorie counting</li>
        <li><FiArrowRight />   Supports Indian & global cuisines</li>
        <li><FiArrowRight />   Fast & free nutrition insight</li>
        <li><FiArrowRight />   Mobile-friendly & lightweight</li>
        <li><FiArrowRight />   Smart AI + nutrition science combined</li>
      </ul>
    </section>
  );
};

export default WhyUse;
