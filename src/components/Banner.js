import React, { useContext } from "react";
import "../styles/Banner.scss";
import lightImage from "../assets/light_version.webp";
import darkImage from "../assets/night_version.webp";
import { ThemeContext } from "../context/ThemeContext";

const Banner = () => {
    const { isDark } = useContext(ThemeContext);

    const currentImage = isDark ? darkImage : lightImage;

    return (
        <div className="banner">
            {/* Lien pour le CV */}
            <a
                href="/path-to-your-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="codeSide"
                    src={currentImage}
                    alt="Bannière Athénaïs (CV)"
                />
            </a>

            {/* Lien pour Instagram */}
            <a
                href="https://www.instagram.com/piama_official"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="piamaSide"
                    src={currentImage}
                    alt="Bannière Piama (Instagram)"
                />
            </a>
        </div>
    );
};

export default Banner;
