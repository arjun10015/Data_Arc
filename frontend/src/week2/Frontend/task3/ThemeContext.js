import React, { createContext, useContext, useState, useEffect } from 'react';

//Create Context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme') || 'light';
    setTheme(storedTheme);
    document.body.className = storedTheme;
  }, []);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.className = theme;
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
