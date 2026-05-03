import { Elysia } from "elysia";

if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}
const PORT = Number(process.env.PORT) || 5000;

const app = new Elysia();

app.listen(PORT, () => {
  console.log(`uni portal gateway is running on ${PORT}`);
});