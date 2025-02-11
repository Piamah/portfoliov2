import React from 'react';
import { Link } from 'gatsby';
import '../styles/Footer.scss'
import { BsFillRocketFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Athénaïs Lecomte - Tous droits réservés.</p>
            <p>Inspiré par le site de <a href="https://brittanychiang.com/#about">Brittany Chiang</a></p>
            <p>
                <Link to="/mentions-legales">Mentions Légales</Link>
            </p>
            <a href="#header-section" className='go-up' aria-label='Return to the top'>
                <BsFillRocketFill />
            </a>
        </footer>
    );
};

export default Footer;
