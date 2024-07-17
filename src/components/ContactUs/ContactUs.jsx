import React from 'react';
import './ContactUs.scss';
import '../styles/textGradient.scss'

import emailIcon from '../../images/iconos/ic-email.png'
import userIcon from '../../images/iconos/ic-user.png'
import arrowLeft from '../../images/iconos/arrow-left.png'

const ContactUs = () => { 
    return (
        <section className="contact-us">
            <div className="d-flex flex-column">
                <div className="contact-header">
                    <h2>Reach our <span className='text-gradient'>Help Desk</span> for support</h2>
                    <p>Questions? Need assistance? Our dedicated support team is here to help you every step of the way:</p>
                </div>
                <form className='d-flex'>
                    <div className='form-group-border'>
                        <div className="form-group">
                            <img src={userIcon} alt="" />
                            <input type="text" id="name" className="form-control" placeholder="Enter Your First Name" />
                        </div>
                    </div>
                    <div className='form-group-border'>
                        <div className="form-group">
                            <img src={emailIcon} alt="" />
                            <input type="email" id="email" className="form-control" placeholder="Enter your email address" />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Contact us <img src={arrowLeft} alt="" /></button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
