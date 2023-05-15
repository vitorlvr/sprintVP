const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const cards = [
  {
    id: 1,
    name: 'Visa',
    number: '1234567812345678',
    expirationDate: '10/25',
    cvv: '123'
  },
  {
    id: 2,
    name: 'MasterCard',
    number: '9876543298765432',
    expirationDate: '12/27',
    cvv: '456'
  }
];

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