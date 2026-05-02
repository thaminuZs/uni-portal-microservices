import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();

dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is on ${PORT}`);
        })
    });