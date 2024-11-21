import React, { useContext } from "react";
import "../styles/Toggle.scss";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkMode() {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="global-toggle-switch" onClick={toggleTheme}>
            <span>
                {isDark ? (
                    <img src={Sun} alt="Sun Icon" />
                ) : (
                    <img src={Moon} alt="Moon Icon" />
                )}
            </span>
        </div>
    );
}
