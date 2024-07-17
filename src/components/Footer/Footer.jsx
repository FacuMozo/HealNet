/* eslint-disable jsx-a11y/anchor-is-valid */
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
                        <a >Getting Started</a>
                        <a >FAQS</a>
                        <a >Help Articles</a>
                        <a >Report an issue</a>
                        <a >Contact Help Desk</a>
                    </div>
                    <div className='columna '>
                        <span>Services</span>
                        <a >Booking appointments</a>
                        <a >Online consultations</a>
                        <a >Prescriptions</a>
                        <a >Medicine Refills</a>
                        <a >Medical Notes</a>
                    </div>
                    <div className='columna '>
                        <span>Legal</span>
                        <a  onclick="return false;">Terms & Conditions</a>
                        <a  onclick="return false;">Privacy Policy</a>
                        <a >Cookie Notice</a>
                        <a >Cookie Preferences</a>
                        <a >Trust Center</a>
                    </div>
                </div>
            </div>
            <hr className='' />
            <div className="end d-flex justify-content-between">
                <div className="social-icons">
                    <a ><img src={facebookIcon} alt="" /></a>
                    <a ><img src={instagramIcon} alt="" /></a>
                    <a ><img src={linkedInIcon} alt="" /></a>
                    <a ><img src={youtubeIcon} alt="" /></a>
                </div>
                <p className='m-0'> HealNet 2024 &copy; All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
