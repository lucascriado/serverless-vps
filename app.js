// Importa o módulo express
const express = require('express');

// Cria uma nova instância do express
const app = express();

// Define a rota padrão para responder com 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Define a porta
const port = 9090;

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});