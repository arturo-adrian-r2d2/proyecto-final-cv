import 'dotenv/config';

const env = {
  port: process.env.PORT || '4000',
  db_host: process.env.DB_HOST || 'localhost',
  db_port: Number(process.env.DB_PORT || 3306),
  db_user: process.env.DB_USER || 'cv_user',
  db_password: process.env.DB_PASSWORD || 'cv_password',
  db_database: process.env.DB_DATABASE || 'cv_db',
};

export default env;
