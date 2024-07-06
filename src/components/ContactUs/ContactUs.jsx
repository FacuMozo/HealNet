import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="container">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
