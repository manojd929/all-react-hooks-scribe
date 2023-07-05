import React, { forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref) => {
  const [showText, setShowText] = React.useState(false);

  useImperativeHandle(ref, () => ({
    alertToggle() {
      setShowText(!showText);
    },
  }));

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      Child Component
      <button onClick={toggleText}>Toggle</button>
      {showText && <p>This is text in child component</p>}
    </div>
  );
});

export default Button;
