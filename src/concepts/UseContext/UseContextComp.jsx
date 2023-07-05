import React from 'react';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

export const ThemeContext = React.createContext();

const UseContextComp = () => {
  const [darkTheme, setDarkTheme] = React.useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionComponent />
      <ClassComponent />
    </ThemeContext.Provider>
  );
};

export default UseContextComp;
