import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import '../styles/Socials.scss';

const Socials = () => {
    return (
        <div className="vertical-bar">
            <a
                href="/CV_AL_022025.pdf"
                download="CV_AL_022025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Download my CV (will open a PDF document)'>
                <FaFileDownload className="icon" />
            </a>
            <a
                href="https://www.instagram.com/piama._/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='My drawing Instagram profile'>
                <FaInstagram className="icon" />
            </a>
            <a
                href="https://github.com/Piamah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='My Github'>
                <FaGithub className="icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/ath%C3%A9na%C3%AFs-lecomte/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label='My Linkedin profile'>
                <FaLinkedin className="icon" />
            </a>
        </div>
    );
};

export default Socials;
