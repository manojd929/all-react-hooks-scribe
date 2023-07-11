import React from 'react';
import useData from './useData';

const UseCustomHookComp = () => {
  const [data, loading, error] = useData();

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;
  if (data) {
    return (
      <div>
        {/* {data.map((d) => (
          <div>{d.name}</div>
        ))} */}
      </div>
    );
  }
};

export default UseCustomHookComp;
