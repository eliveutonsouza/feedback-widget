import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const httpPort = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(httpPort, () => {
  console.log(
    `\n\nHTTP server running in port ${httpPort}! \n\nClick here: http://localhost:${httpPort}`
  );
});
