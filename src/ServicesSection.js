// ServicesSection.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceCard.css';
import { Typography } from '@mui/material';

const ServicesSection = () => {
  const services = [
    { title: "Fire Alarm Engineering", description: "At GoIGNIS, we understand the critical role that a well-designed fire alarm system plays in protecting life and property. Our engineers have the expertise to design fire..." },
    { title: "Fire Sprinkler Engineering", description: "Our Fire Sprinkler Engineering team offers comprehensive design services that comply with NFPA standards and relevant codes. Using advanced software such as..." },
    { title: "Electrical Engineering", description: "Our electrical engineering team at GoIGNIS understands the ever-increasing complexity and functionality of building systems, driven by the Internet of Things (IoT). We are..." },
    { title: "HVAC ENGINEERING", description: "At GoIGNIS, we understand that heating, ventilation, and air conditioning (HVAC) are crucial components in any building. We have a team of..." },
    { title: "ARCS ENGINEERING", description: "At GoIGNIS, we understand the importance of Auxiliary Radio Communication Systems (ARCS) in high-rise buildings..." }
  ];

  return (
    <div className="services-section">
     <div style={{position:'absolute',height:'412px'}}>      </div>

     <Typography variant='h2' className='service-title'>Our Services</Typography>
     <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
     <div style={{width:'980px'}} >
     <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
     </div>
     </div>
    </div>
  );
};

export default ServicesSection;
