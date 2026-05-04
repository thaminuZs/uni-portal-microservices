import { Router } from "express";
import canteenController from "../controllers/canteen-controller.js";

const app = Router();

app
    .get("/", canteenController.getAllCanteens)
    .get("/:id", canteenController.getCanteenById)
    .post("/", canteenController.createCanteen)
    .post("/:id/queue", canteenController.reportQueueStatus)
    .get("/:id/queue", canteenController.getQueueLogs)


export { app as canteenRoutes }