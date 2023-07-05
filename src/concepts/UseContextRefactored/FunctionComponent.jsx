import React from 'react';
import { useTheme, useThemeUpdater } from './ThemeContext';
const FunctionComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdater();

  const themeStyle = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  );
};

export default FunctionComponent;
