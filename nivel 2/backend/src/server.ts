import express from 'express';
import routes from './routes';

const app = express()

routes.get('/')

app.listen(3333, () => {
  console.log('server started on port 3333')
});
