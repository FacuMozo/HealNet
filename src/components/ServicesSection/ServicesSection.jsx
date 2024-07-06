import React from 'react';
import './ServicesSection.scss';

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container">
                <h2>Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="services">
                    <div className="service-card">
                        <div className="icon">Icon1</div>
                        <h3>Service 1</h3>
                        <p>Description of service 1</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">Icon2</div>
                        <h3>Service 2</h3>
                        <p>Description of service 2</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">Icon3</div>
                        <h3>Service 3</h3>
                        <p>Description of service 3</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">Icon4</div>
                        <h3>Service 4</h3>
                        <p>Description of service 4</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">Icon5</div>
                        <h3>Service 5</h3>
                        <p>Description of service 5</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
