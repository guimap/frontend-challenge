const fields = require('./fields.json')
const express = require('express');
const app = express();

app.get('/fields', (req, res) => {
  res.send(JSON.stringify(fields));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
