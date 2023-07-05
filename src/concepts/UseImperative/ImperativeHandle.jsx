import React from 'react';
import Button from './Button';

const ImperativeHandle = () => {
  const buttonRef = React.useRef(null);

  return (
    <React.Fragment>
      <div>Parent Component</div>
      <button
        onClick={() => {
          buttonRef.current.alertToggle();
        }}
      >
        Parent Button
      </button>
      <Button ref={buttonRef} />
    </React.Fragment>
  );
};

export default ImperativeHandle;
