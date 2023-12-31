const { config } = require('./../config/config');

// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
    define: {
      // Forzar la creación de la base de datos si no existe
      force: true,
    },
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    ssl:{
      rejectUnauthorized:false
    }
  }
}
