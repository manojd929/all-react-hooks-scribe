import React from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'TOGGLE_TEXT':
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    counter: 0,
    showText: true,
  });

  const toggleText = () => {
    dispatch({ type: 'TOGGLE_TEXT' });
  };

  return (
    <React.Fragment>
      <div>Counter: {state.counter}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <div>
        {state.showText && <p>This is a sample text.</p>}
        <button onClick={toggleText}>Toggle Text</button>
      </div>
    </React.Fragment>
  );
};

export default UseReducer;
