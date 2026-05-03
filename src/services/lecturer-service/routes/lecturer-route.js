import { Router } from "express";
import lecturerController from "../controllers/lecturer-controller.js";

const app = Router();

app
    .get("/", lecturerController.getAllLecturers)
    .get("/:id", lecturerController.getLecturerById)
    .post("/", lecturerController.createLecturer)
    .put("/:id", lecturerController.updateLecturer)
    .delete("/:id", lecturerController.deleteLecturer)
    .post("/:id/attendance", lecturerController.markLecturerAttendance)
    .get("/:id/attendance", lecturerController.getAllLogs)


export { app as lecturerRoutes }