import React, { useState, useEffect, useRef } from "react";
import Socials from '../components/Socials.js'
import { Link } from 'gatsby';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import '../styles/Hamburger.scss';

const HamburgerMenu = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ferme menu clic en dehors
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Ferme menu si la fenêtre > 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //Scroll bar sur menu

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"; // Empêche le scroll du body
        } else {
            document.body.style.overflow = ""; // Réactive le scroll du body
        }

        return () => {
            document.body.style.overflow = ""; // Nettoyage
        };
    }, [isMenuOpen]);

    return (
        <div className="hamburger">
            <div className="menu" onClick={toggleMenu}>
                {isMenuOpen ? <CgClose className="close-menu" /> : <GiHamburgerMenu className="icon-menu" />}
            </div>

            <nav ref={menuRef} className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="#about-section" onClick={toggleMenu}>{t('about')}</Link></li>
                    <li><Link to="#skills-section" onClick={toggleMenu}>{t('skills')}</Link></li>
                    <li><Link to="#project-section" onClick={toggleMenu}>{t('project')}</Link></li>
                    <li><Link to="#contact-section" onClick={toggleMenu}>{t('contact')}</Link></li>
                </ul>
                <Socials />
            </nav>
        </div>
    );
};

export default HamburgerMenu;
