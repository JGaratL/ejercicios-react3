import './App.css';
import React, { lazy, Suspense } from 'react';
import ShowServerConfig from './components/ShowServerConfig';
import ShoppingKart from './components/ShoppingKart';

const Ejercicio2 = lazy(() => import('./components/Ejercicio2'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <Ejercicio2 /> 
      </Suspense>

      <ShowServerConfig 
        config={{ minConnections: 5, maxConnections: 100, restartAlways: true }} 
        environment="dev" 
        ssl={true} 
      />

      <ShoppingKart />
    </>
  );
}

export default App;
