import { useState, useEffect } from 'react';

const useData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log('HERE');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((_err) => setError('Error in fetching data'))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useData;
