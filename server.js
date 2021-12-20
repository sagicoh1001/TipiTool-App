import getAllDocuments from './services/getAllQuestions.js'

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const app = express(),
      port = process.env.PORT || 3080,
      __dirname = process.cwd();

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/dist')));

app.get('/api/getAllDocuments', async (req, res) => {
  console.log('api/getAllDocuments called!');
  res.json(await getAllDocuments());
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './app/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});