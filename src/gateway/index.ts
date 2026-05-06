import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { lecturerProxy } from "./routes/lecturer-proxy";
import { canteenProxy } from "./routes/canteen-proxy";
import { libraryProxy } from "./routes/library-proxy";

if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}
const PORT = Number(process.env.PORT) || 5000;

const app = new Elysia();

app.use(cors())

.onRequest(({request, set}) => {
  (set as any).start = Date.now();
})
.onAfterHandle(({request, set}) => {
  const time = Date.now() - (set as any).start;
  const path = new URL(request.url).pathname;

  console.log(`${request.method} ${path} ${set.status} ${time}ms`);
})

.get("/", () => "gateway")

.all("/api/lecturers*", (ctx) => lecturerProxy(ctx), {parse: 'none'})
.all("/api/canteens*", (ctx) => canteenProxy(ctx), {parse: 'none'})
.all("/api/libraries*", (ctx) => libraryProxy(ctx), {parse: 'none'})


app.listen(PORT, () => {
  console.log(`uni portal gateway is running on ${PORT}`);
});