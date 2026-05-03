import express from "express";
import { dbConnection } from "./config/db.js";

if (process.env.NODE_ENV !== "production") {
  const dotenv = await import("dotenv");
  dotenv.config();
}

const PORT = process.env.PORT || 5001;

const app = express();

dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is on ${PORT}`);
        })
    });

