const path = require('path');
const fields = require('./fields.json')
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/fields', (req, res) => {
  res.send(JSON.stringify(fields));
});

app.get('/moda-e-beleza/cabeleireiros', (req, res) => {
  res.sendFile(path.join(__dirname, 'app','index.html'))
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
