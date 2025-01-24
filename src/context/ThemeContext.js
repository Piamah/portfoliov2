import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const isBrowser = typeof window !== "undefined";

    const [isDark, setIsDark] = useState(() => {
        if (isBrowser) {
            const savedTheme = window.localStorage.getItem("theme");
            return savedTheme === "dark";
        }
        return false;
    });

    useEffect(() => {
        if (isBrowser) {
            document.body.classList.toggle("dark", isDark);
            window.localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    }, [isDark, isBrowser]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}>
            {children}
        </ThemeContext.Provider>
    );
};
