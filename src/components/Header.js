import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/websites_logo.webp'
import '../styles/Header.scss'
import { useTranslation } from "react-i18next"



const Header = () => {

    const { t } = useTranslation()

    return (
        <header className="header">
            <a href='https://github.com/Piamah' target="_blank" rel="noreferrer" ><img className='logo' src={logo} alt='Athénaïs Logo' link='ess'></img></a>
            <nav>
                <ul>
                    <li>
                        <Link to="#about-section">{t('about')}</Link>
                    </li>
                    <li>
                        <Link to="#skills-section">Compétences</Link>
                    </li>
                    <li>
                        <Link to="#project-section">Projets</Link>
                    </li>
                    <li>
                        <Link to="#contact-section">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;