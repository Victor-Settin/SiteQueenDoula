import React from 'react';
import imgDoula from '../../Images/teste4.png';
import './DoulaServices.css';

const DoulaServices = () => {
  return (
    <section className="doula-services">
      <div className="doula-container">
        <div 
          className="doula-text" 
          data-aos="slide-right" 
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="section-title">Postpartum Doula: What I Do</div>
          <p className="doula-description">
            <strong>
              Postpartum Doula services are customized to your family’s needs and include the following:
            </strong>
          </p>
          <ul className="doula-list">
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Postpartum recovery 
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Partner support
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Routine strategizing and building
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Newborn comfort techniques
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Infant sleep positioning & timing
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Troubleshooting issues in real-time
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Newborn product and safety information
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Day to day baby related house cleaning and laundry
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Meal preparation
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> Sibling care
            </li>
            <li>
              <div style={{ color: '#a2c037', display: 'inline' }}>➤</div> And so much more
            </li>
          </ul>
          <em className="doula-footer">
              Doulas: because every family deserves care and support.
          </em>
        </div>
        <div 
          className="doula-img" 
          data-aos="slide-right" 
          data-aos-duration="1700"
        >
          <img src={imgDoula} alt="doulaImg" />
        </div>
      </div>
    </section>
  );
};

export default DoulaServices;
