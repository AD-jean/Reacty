import React from 'react';
import { FaFacebook, FaYoutube, FaTiktok } from 'react-icons/fa'; // Importing icons
import '../styles/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>MISSION</h4>
                <p>CONVENTION BAPTISTE DU TOGO</p>
                <p>ASSOCIATION AGAPE</p>
                <p>LOME-TOGO</p>
                <p>Email: Info@Agape.org</p>
            </div>
            <div className="social-media">
                <h4>RÉSEAUX SOCIAUX</h4>
                <div className="icons">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2025 Jeanking - Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;
