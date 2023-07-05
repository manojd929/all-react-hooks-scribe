import React from 'react';

const UseRefComp = () => {
  const inputRef = React.useRef(null);

  const handleFocus = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Type here..." ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </React.Fragment>
  );
};

export default UseRefComp;
