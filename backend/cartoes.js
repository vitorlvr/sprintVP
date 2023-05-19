const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

cards = []


app.get('/cards', (req, res) => {
  res.json(cards);
});

app.post('/cards', (req, res) => {
  const newCard = req.body;
  cards.push(newCard);
  res.status(201).json(newCard);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});