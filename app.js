const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const options = {
  key: fs.readFileSync('./privkey.pem'),
  cert: fs.readFileSync('./fullchain.pem')
};

const port = 9090;

https.createServer(options, app).listen(port, () => {
  console.log(`Aplicação rodando em https://localhost:${port}`);
});