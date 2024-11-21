import React from 'react';
import '../styles/Footer.scss'
import { BsFillRocketFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 Athénaïs Lecomte - Tous droits réservés.</p>
            <p>Inspiré par le site de <a href="https://brittanychiang.com/#about">Brittany Chiang</a></p>
            <a href="#header-section">
                <BsFillRocketFill className='go-up' />
            </a>
        </footer>
    );
};

export default Footer;
