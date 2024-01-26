// Importa o módulo express
const express = require('express');
const fs = require('fs');

// Cria uma nova instância do express
const app = express();

// Define a rota padrão para responder com 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World');
});

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/lucascriado.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/lucascriado.com/fullchain.pem')
};

// Define a porta
const port = 9090;

// Inicia o servidor na porta especificada
app.listen(options, port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});