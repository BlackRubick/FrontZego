// next.config.js

const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Aquí ajustamos la configuración de webpack
      config.bail = false; // Desactiva el modo bail en webpack
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  