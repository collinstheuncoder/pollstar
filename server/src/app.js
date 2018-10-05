import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import { routes } from './routes';

// DB config
import './db'; 

const app = express();

// App Config
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
  });
}

// Routes Config
app.use('/auth', routes.authRouter);
app.use('/categories', routes.categoriesRouter);
app.use('/polls', routes.pollsRouter);

// Error handling
app.use((error, req, res, next) => {
  console.error(error.message);

  if (!error.statusCode) error.statusCode = 500; 

  res.status(error.statusCode).send(error.message); 
});

app.get('*', (req, res, next) => {
  const err = new Error('Page Not Found');
  err.statusCode = 404;

  next(err);
});

export default app;
