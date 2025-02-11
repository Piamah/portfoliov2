import React, { useContext } from "react";
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ThemeContext } from '../context/ThemeContext';
import Switch from '../components/Switch';
import Hamburger from '../components/Hamburger';
import '../styles/Header.scss';
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    const { isDark } = useContext(ThemeContext) || { isDark: false, toggleTheme: () => { } };

    // Récupération du logo via GraphQL
    const data = useStaticQuery(graphql`
        query {
            lightLogo: file(relativePath: { eq: "websites_logo.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 150, layout: FIXED)
                }
            }
            darkLogo: file(relativePath: { eq: "websites_logo_darktheme.webp" }) {
                childImageSharp {
                    gatsbyImageData(width: 150, layout: FIXED)
                }
            }
        }
    `);
    // Choix du logo
    const lightLogo = getImage(data.lightLogo);
    const darkLogo = getImage(data.darkLogo);
    const currentLogo = isDark ? darkLogo : lightLogo;

    return (
        <header className="header">
            <a className="logo-header" href='https://github.com/Piamah' target="_blank" rel="noreferrer">
                <GatsbyImage className='logo' image={currentLogo} alt='Athénaïs Logo' />
            </a>
            <nav className="desk-nav">
                <ul>
                    <li><Link to="#about-section">{t('about')}</Link></li>
                    <li><Link to="#skills-section">{t('skills')}</Link></li>
                    <li><Link to="#project-section">{t('project')}</Link></li>
                    <li><Link to="#contact-section">{t('contact')}</Link></li>
                </ul>
            </nav>
            <div className="menu-content">
                <Hamburger />
                <Switch />
            </div>
        </header>
    );
};

export default Header;
