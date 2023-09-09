import React, { useState, useEffect } from 'react';

const Ejercicio2 = () => {
  const [contador, setContador] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (contador === 3) {
        throw new Error('El contador alcanzó el valor de 3');
      }
    } catch (error) {
      setError(error);
      console.error(error);
    }
  }, [contador]);

  const reset = () => {
    setContador(0);
    setError(null);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Ejercicio2;
