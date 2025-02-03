import React, { useContext } from "react";
import { Link } from 'gatsby';
import { ThemeContext } from '../context/ThemeContext';
import logolight from '../assets/websites_logo.webp';
import logodark from '../assets/websites_logo_darktheme.webp';
import Switch from '../components/Switch'
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const { isDark } = useContext(ThemeContext) || { isDark: false, toggleTheme: () => { } };

    const logo = isDark ? logodark : logolight;

    return (
        <header className="header">
            <a href='https://github.com/Piamah' target="_blank" rel="noreferrer" >
                <img className='logo' src={logo} alt='Athénaïs Logo'></img>
            </a>
            <nav className="desk-nav">
                <ul>
                    <li>
                        <Link to="#about-section">{t('about')}</Link>
                    </li>
                    <li>
                        <Link to="#skills-section">{t('skills')}</Link>
                    </li>
                    <li>
                        <Link to="#project-section">{t('project')}</Link>
                    </li>
                    <li>
                        <Link to="#contact-section">{t('contact')}</Link>
                    </li>
                </ul>
            </nav>
            <Hamburger />
            <Switch />
        </header>
    );
};

export default Header;
