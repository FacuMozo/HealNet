import React from 'react';
import './AboutUsCard.scss';

const AboutUsCard = () => {
    return (
        <section className="about-us-card">
            <div className="container">
                <h2>About Us</h2>
                <div className="card">
                    <img src="about-us-image.jpg" alt="About Us" />
                    <div className="card-content">
                        <h3>Our Mission</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUsCard;
