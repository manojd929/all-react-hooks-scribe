import React from 'react';
import useData from './useData';

const UseCustomHookComp = () => {
  let { data, loading, error } = useData();

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      {data && (
        <div>
          <ul>
            {data.slice(0, 10).map((d, index) => (
              <li key={index}>{d.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseCustomHookComp;
