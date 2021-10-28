import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row pt-5">
                    <ul className="d-flex mr-auto justify-content-center">
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Contact Me</li>
                    </ul>
                </div>
                <div className="copyRight text-center pb-3 text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;