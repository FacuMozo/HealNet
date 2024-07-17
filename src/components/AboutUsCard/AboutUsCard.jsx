import React from 'react';
import './AboutUsCard.scss';
import AboutUs from '../../images/AboutUs.png'

const AboutUsCard = () => {
    return (
        <section className="about-us-section">
            {/* <div className="container"> */}
                <div className='card-border'>
                    <div className="about-us-card">
                        <h2><span className='text-gradient'>HealNet’s Story:</span> Get to know us</h2>
                        <div className="card-content">
                            <img src={AboutUs} alt="About Us" />
                            <div className='content-body d-flex flex-column'>
                                <p>HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s just a click away.</p>
                            <button className='about-us-btn'><span>Learn more about us</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    );
}

export default AboutUsCard;
