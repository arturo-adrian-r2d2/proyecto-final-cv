import app from './app.js';
import env from './config/env.js';
import { testConnection } from './database/database.js';

const startServer = async () => {
  try {
    await testConnection();
    console.log('Conexion a MySQL establecida.');
  } catch (error) {
    console.error('No se pudo conectar a MySQL al iniciar.', error.message);
  }

  app.listen(env.port, () => {
    console.log(`Server on port ${env.port}`);
  });
};

void startServer();
