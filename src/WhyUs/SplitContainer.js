// SplitContainer.js
import React from 'react';
import './SplitContainer.css';

const SplitContainer = () => {
  return (
    <div className="split-container">
      <div className="left-side">
        <div className="content">
          <h3>99% Accuracy</h3>
          <p>We understand the importance of accurate data...</p>
        </div>
        <div className="content">
          <h3>Budget-Friendly Pricing Options</h3>
          <p>We offer a very economical pricing structure...</p>
        </div>
        <div className="content">
          <h3>Customized Design Solution</h3>
          <p>We provide access to our highly specialized...</p>
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <h3>Quick Turnaround Time</h3>
          <p>Our skilled teams work around the clock...</p>
        </div>
        <div className="content">
          <h3>A Hub of Skill Professionals</h3>
          <p>Our experienced professionals perform comprehensive research...</p>
        </div>
        <div className="content">
          <h3>Responsive Customer Oriented Services</h3>
          <p>Our customer-centric approach allows us to...</p>
        </div>
      </div>
    </div>
  );
};

export default SplitContainer;
