import React from 'react';
import PropTypes from 'prop-types';

const ShowServerConfig = ({ config, environment, ssl }) => {

    if (!['dev', 'play', 'live'].includes(environment)) {
    return <div>Error: El environment es inválido.</div>;
  }


  if (environment === 'live' && !ssl) {
    return <div>Error: SSL es obligatorio para el entorno 'live'.</div>;
  }

  return (
    <div>
      <h2>Configuración del servidor</h2>
      <p>Min Connections: {config.minConnections}</p>
      <p>Max Connections: {config.maxConnections}</p>
      <p>Restart Always: {config.restartAlways ? 'Sí' : 'No'}</p>
      <p>Environment: {environment}</p>
      <p>SSL: {ssl ? 'Habilitado' : 'Deshabilitado'}</p>
    </div>
  );
};

ShowServerConfig.propTypes = {
  config: PropTypes.shape({
    minConnections: PropTypes.number.isRequired,
    maxConnections: PropTypes.number.isRequired,
    restartAlways: PropTypes.bool.isRequired,
  }).isRequired,
  environment: PropTypes.string.isRequired,
  ssl: PropTypes.bool.isRequired,
};

export default ShowServerConfig;
