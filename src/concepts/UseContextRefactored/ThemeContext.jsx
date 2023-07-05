import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeContextUpdater = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdater.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdater.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdater = () => {
  return useContext(ThemeContextUpdater);
};
