import { Router } from "express";
import libraryController from "../controllers/library-controller.js";

const app = Router();

app
    .get("/", libraryController.getAllLibraries)
    .get("/:id", libraryController.getLibraryById)
    .post("/", libraryController.createLibrary)
    .post("/:id/occupancy", libraryController.reportOccupancy)
    .get("/:id/occupancy/logs", libraryController.getOccupancyLogs)


export { app as libraryRoutes }