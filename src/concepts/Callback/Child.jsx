import React from 'react';

const Child = ({ returnComment }) => {
  React.useEffect(() => {
    console.log('Function was called');
  }, [returnComment]);

  return <p>{returnComment('Mano')}</p>;
};

export default Child;
