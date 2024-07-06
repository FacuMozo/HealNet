import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">HealthNet</div>
                <nav className="nav-links">
                    <a href="#home" className="nav-link active">Home</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About Us</a>
                </nav>
                <button className="join-us">Join Us</button>
            </div>
        </header>
    );
}

export default Header;
