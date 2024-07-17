import React from 'react';
import './Footer.scss';

import logo from '../../images/footer/logo.png'
import facebookIcon from '../../images/footer/facebook.png'
import instagramIcon from '../../images/footer/instagram.png'
import linkedInIcon from '../../images/footer/linkedin.png'
import youtubeIcon from '../../images/footer/youtube.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className='start '>
                <div className='columna-1  text-start'>
                    <img src={logo} alt="" />
            
                    <p className='m-0'>Experience personalized medical <br /> care from the comfort of your home.</p>
                </div>
                <div className='links'>

                    <div className='columna '>
                        <span>Support</span>
                        <a href="./">Getting Started</a>
                        <a href="./">FAQS</a>
                        <a href="./">Help Articles</a>
                        <a href="./">Report an issue</a>
                        <a href="./">Contact Help Desk</a>
                    </div>
                    <div className='columna '>
                        <span>Services</span>
                        <a href="./">Booking appointments</a>
                        <a href="./">Online consultations</a>
                        <a href="./">Prescriptions</a>
                        <a href="./">Medicine Refills</a>
                        <a href="./">Medical Notes</a>
                    </div>
                    <div className='columna '>
                        <span>Legal</span>
                        <a href="./">Terms & Conditions</a>
                        <a href="./">Privacy Policy</a>
                        <a href="./">Cookie Notice</a>
                        <a href="./">Cookie Preferences</a>
                        <a href="./">Trust Center</a>
                    </div>
                </div>
            </div>
            <hr className='' />
            <div className="end d-flex justify-content-between">
                <div className="social-icons">
                    <a href="./"><img src={facebookIcon} alt="" /></a>
                    <a href="./"><img src={instagramIcon} alt="" /></a>
                    <a href="./"><img src={linkedInIcon} alt="" /></a>
                    <a href="./"><img src={youtubeIcon} alt="" /></a>
                </div>
                <p className='m-0'> HealNet 2024 &copy; All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
