import React from 'react';

const UseLayoutEffect = () => {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    console.log('UseLayoutEffectComponent: UseEffect');
    inputRef.current.value = 'HELLO';
  }, []);

  React.useLayoutEffect(() => {
    // useLayoutEffect is always called before useEffect
    console.log('UseLayoutEffect Component: UseLayoutEffect');
    console.log(inputRef.current.value);
  }, []);

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        value="PEDRO"
        style={{ width: 400, height: 20 }}
        onChange={() => {}}
      />
    </React.Fragment>
  );
};

export default UseLayoutEffect;
