// ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description }) => {
    console.log(title,description,'sjfkj')
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <a href="#">+ Learn More</a>
    </div>
  );
};

export default ServiceCard;
