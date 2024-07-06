import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Healthcare Inc. All rights reserved.</p>
                <div className="social-icons">
                    <a href="./"><i className="fab fa-facebook-f"></i></a>
                    <a href="./"><i className="fab fa-twitter"></i></a>
                    <a href="./"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
