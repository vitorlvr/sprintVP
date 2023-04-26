const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/ola', (req, res) => {
  res.send('Ola');
});

app.post('/ola', (req, res) => {
  const nome = req.body.nome;
  res.send(`Ola, ${nome}!`);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});