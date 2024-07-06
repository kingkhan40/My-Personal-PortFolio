import React from 'react';
import './About.css';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box ">
            <i class="bx bx-award about__icon"></i>
            <h3 className="about__title">Experince</h3>
            <span className="about__subtitle">8 Year Working</span>
        </div>
        <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48 + Projects</span>
        </div>
        <div className="about__box">
        <i class="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">24/7 Online</span>
        </div>
        
    </div>
  )
}

export default Info;