import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Switch.scss'

const Switch = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext) || { isDark: false, toggleTheme: () => { } };

    return (
        <div className="switch">
            <button
                onClick={toggleTheme}
                className={`checkbox ${isDark ? 'dark' : 'light'}`}
                aria-label={`Activer le mode ${isDark ? 'light' : 'dark'}`}
            >
                <span className="visually-hidden">
                    {`Activer le mode ${isDark ? 'light' : 'dark'}`}
                </span>
            </button>
            <span className="slider round"></span>
        </div>
    );
};

export default Switch;
