import React from 'react';
import FunctionComponent from './FunctionComponent';
import { ThemeProvider } from './ThemeContext';

const UseContextRefactoredComp = () => {
  return (
    <ThemeProvider>
      <FunctionComponent />
    </ThemeProvider>
  );
};

export default UseContextRefactoredComp;
