import express from "express";
import { env } from "./env";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error";
// Cria o servidor Express.

const app = express();
const port = env.PORT;

// Adiciona um middleware para processar requisições com corpo JSON.
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
