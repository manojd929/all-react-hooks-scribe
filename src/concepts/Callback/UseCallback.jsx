import React from 'react';
import axios from 'axios';
import Child from './Child';

const UseCallback = () => {
  const [toggle, setToggle] = React.useState(false);
  const [data, setData] = React.useState('Please subscribe to the channel');

  // Function is recreated every time when there is a state change, hence we use useCallback
  const returnComment = React.useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <React.Fragment>
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggle text</p>}
    </React.Fragment>
  );
};

export default UseCallback;
