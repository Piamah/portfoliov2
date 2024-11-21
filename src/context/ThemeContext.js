import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = window.localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
        window.localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
            {children}
        </ThemeContext.Provider>
    );
};
