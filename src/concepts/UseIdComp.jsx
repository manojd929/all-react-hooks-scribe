import React, { useId } from 'react';

const UseIdComp = () => {
  const id = useId();

  return (
    <>
      <label htmlFor="email">Email</label>
      <input id={id} type="email" />
      <article style={{ margin: '2rem' }}>Lorem ipsum</article>
      <label htmlFor="email">Email</label>
      <input id={id} type="email" />
    </>
  );
};

export default UseIdComp;
