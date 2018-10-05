import http from 'http';

import app from './app';
import config from './config';

const { port } = config;

http.createServer(app).listen(port, () => {
  console.log(`Server running at ${port}`);
});
