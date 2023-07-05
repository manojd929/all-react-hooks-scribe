import React, { useState, useEffect } from 'react';

// Reference: jsonplaceholder.typicode.com

const UseEffectComp = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [item, setItem] = useState({});
  // Will not get called if previous resourceType and current resourceType are same
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setItem(json[0]);
      });

    return () => {
      console.log('You changed the resource Type from ', resourceType);
    };
  }, [resourceType]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <p>Window Width: {windowWidth}</p>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <p>{item.title || item.username || item.body}</p>
    </>
  );
};

export default UseEffectComp;
