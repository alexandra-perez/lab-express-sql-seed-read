const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const songController = require('./controllers/songController');
app.use('/songs', songController);

app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

app.get('/*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
