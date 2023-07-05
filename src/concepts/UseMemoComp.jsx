import React, { useState, useMemo } from 'react';

const slowFunction = (number) => {
  for (let i = 0; i <= 2000000000; i++) {}
  return number * 2;
};

const UseMemoComp = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // this would be called every time slowing the performance of the app
  // const doubleNumber = slowFunction(number);

  // we should not use useMemo for every state update as this has memory cost associated with it
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    height: '200px',
    width: '300px',
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };
  // we can use useMemo to compute themeStyles

  return (
    <div style={themeStyles}>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <p>Double Number: {doubleNumber}</p>
    </div>
  );
};

export default UseMemoComp;
