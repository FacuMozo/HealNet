import React from 'react';
import './BannerSection.scss';

const BannerSection = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="column-1">
                    <h1>Your trusted healthcare partner</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="book-appointment">Book an appointment</button>
                    <div className="info-icons">
                        <div className="icon">Icon1</div>
                        <div className="icon">Icon2</div>
                    </div>
                </div>
                <div className="column-2">
                    <img src="doctor-image.jpg" alt="Doctor" />
                    <div className="card">
                        <div className="icon">Icon</div>
                        <div className="highlight-text">Highlighted Text</div>
                    </div>
                    <div className="card">
                        <img src="card-image.jpg" alt="Card" />
                    </div>
                    <div className="card">
                        <div className="text">Some Text</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
