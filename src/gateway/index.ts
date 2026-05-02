import { Elysia } from "elysia";
import dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT) || 5000;

const app = new Elysia();

app.listen(PORT, () => {
  console.log(`uni portal is running on ${PORT}`);
});