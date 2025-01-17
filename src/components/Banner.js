import React, { useContext } from "react";
import "../styles/Banner.scss";
import lightImage from "../assets/light_version.webp";
import darkImage from "../assets/night_version.webp";
import { ThemeContext } from "../context/ThemeContext";

const Banner = () => {
    const { isDark } = useContext(ThemeContext) || { isDark: false };

    const currentImage = isDark ? darkImage : lightImage;

    return (
        <div className="banner">
            <img
                className="banner-content"
                src={currentImage}
                alt="Athénaïs bannière"
            />
        </div>

    );
};

export default Banner;
