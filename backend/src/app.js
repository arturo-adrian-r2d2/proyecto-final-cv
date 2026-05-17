import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import cvRoutes from './routes/cv.route.js';

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use(cvRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Error interno del servidor.' });
});

export default app;
