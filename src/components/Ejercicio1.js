import React, { useState, useEffect } from 'react';

const Ejercicio1 = () => {
  const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url, options);
          if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      
      fetchData();
    }, [url, options]);

    return { data, loading, error };
  };

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1', {}); // API de prueba

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Ejercicio1;
