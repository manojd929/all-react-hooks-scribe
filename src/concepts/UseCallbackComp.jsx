import React, { useState, useEffect, useCallback } from 'react';

const ListComp = ({ getNumbers }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    console.log('useEffect called');
    setNumbers(getNumbers());
  }, [getNumbers]);

  return numbers.map((n, index) => <div key={index}>{n}</div>);
};

// Very similar to useMemo
const UseCallbackComp = () => {
  const [input, setInput] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const themeStyles = {
    backgroundColor: darkTheme ? '#000' : '#fff',
    color: darkTheme ? '#fff' : '#000',
  };

  const getNumbers = useCallback(() => {
    return [input, input + 1, input + 2];
  }, [input]);

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <ListComp getNumbers={getNumbers} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</button>
    </div>
  );
};

export default UseCallbackComp;
