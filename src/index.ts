import express from "express";

// Cria o servidor Express.
const app = express();
const port = 3000;

// Adiciona um middleware para processar requisições com corpo JSON.
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
