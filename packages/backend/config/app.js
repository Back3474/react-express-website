import express from 'express';
import cors from 'cors';
import textsController from '../src/controllers/index.js';
import { connectDB, syncModels } from './database.js';
import { runInitialTextsSeed } from '../src/seeders/initial-texts-seed.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/texts', textsController.getTexts);
app.post('/api/texts', textsController.createText);

app.use('/api/error', () => {
  throw new Error('This is a test error for error handling');
});

app.use((err, req, res, next
) => {
  console.error('Unhandled error:', err.stack);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    error: err.message || 'Internal Server Error',
    message: 'An unexpected error occurred.',
  });
});

await connectDB();
await syncModels(false);
await runInitialTextsSeed();

export default app;

