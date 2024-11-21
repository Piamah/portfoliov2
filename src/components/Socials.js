import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Socials.scss';

const Socials = () => {
    return (
        <div className="vertical-bar">
            <a href="https://www.instagram.com/athenais.lct/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
            </a>
            <a href="https://github.com/Piamah" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/ath%C3%A9na%C3%AFs-lecomte/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon" />
            </a>
        </div>
    );
};

export default Socials;
