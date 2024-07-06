import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>What Our Patients Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial-card">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                        <h3>- John Doe</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>"Integer nec odio. Praesent libero. Sed cursus ante dapibus."</p>
                        <h3>- Jane Smith</h3>
                    </div>
                    <div className="testimonial-card">
                        <p>"Fusce nec tellus sed augue semper porta."</p>
                        <h3>- Robert Johnson</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
