import express from 'express';

import { list } from './routes';

const app = express();

app.get('/', list);

app.listen(3333, () => {
  console.log('servidor node com typescript rodando');
});