import React, { useState } from 'react';
import logo from '../../images/LogoHealNet.png';
import './Header.scss';

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home');

    return (
        <header className="header">
            <nav className='navbar navbar-expand-lg navbar'>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} className="logo navbar-brand" alt="HealNet Logo" />
                    <button className="join-us d-lg-none small">Join Us</button>
                    <div className=" collapse navbar-collapse m-auto " id="navbarNavAltMarkup">
                        <div className="navbar-nav text-start text-lg-center m-auto">
                            <a href="#home "
                                className={`link  nav-link ${activeNav === '#home' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#home')}>
                                Home
                            </a>
                            <a href="#find-doctors"
                                className={`link nav-link ${activeNav === '#find-doctors' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#find-doctors')}>
                                Find Doctors
                            </a>
                            <a href="#services"
                                className={`link nav-link ${activeNav === '#services' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#services')}>
                                Services
                            </a>
                            <a href="#about"
                                className={`link nav-link ${activeNav === '#about' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#about')}>
                                About Us
                            </a>
                            <a href="#blog"
                                className={`link nav-link ${activeNav === '#blog' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#blog')}>
                                Blog
                            </a>
                            <a href="#contact"
                                className={` link nav-link ${activeNav === '#contact' ? 'active' : ''}`}
                                onClick={() => setActiveNav('#contact')}>
                                Contact Us
                            </a>
                        </div>
                        <button className="join-us notsmall d-sm-none d-lg-flex ">
                            <p className='m-0'>Join Us</p>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
