import React from 'react';

/*
- You can only use hooks in function component
- Hooks must execute in the same order they are written so no hooks are allowed in condition (Like inside if checks, they cannot be nested)
- Hooks always return an array that returns two values 
*/
const UseStateComp = () => {
  const [counter, setCounter] = React.useState(0);

  // Runs only first time when component is rendered
  // const [counter, setCounter] = React.useState(() => {
  //   return 0;
  // });

  const incrementCount = () => {
    setCounter(counter + 1);
    // setCounter(counter + 1); Having two does not work as during render, counter value remains same
  };

  const decrementCount = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <React.Fragment>
      <div>Counter: {counter}</div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </React.Fragment>
  );
};

export default UseStateComp;
