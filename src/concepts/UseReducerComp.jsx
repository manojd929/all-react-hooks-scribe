import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <span>&nbsp;{state.count}&nbsp;</span>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default UseReducerComp;
