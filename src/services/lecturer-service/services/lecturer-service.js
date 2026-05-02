import { Lecturer } from "../models/lecturer-model.js";
import { AttendanceLog } from "../models/attendanceLog-model.js";

export default {
    create: async (data) => {
        const exists = await Lecturer.find({email: data.email});
        if (exists) throw new Error("lecturer with this email already exists");

        const createdLecturer = await Lecturer.create(data);

        return createdLecturer;
    },

    getAll: async () => {
        const lecturers = await Lecturer.find();

        return lecturers;
    },

    getById: async (id) => {
        const lecturer = await Lecturer.findById(id);
        if (!lecturer) throw new Error("can't find lecturer with this id");

        return lecturer;
    },

    update: async (id, data) => {
        const lecturer = await Lecturer.findById(id);
        if (!lecturer) throw new Error("can't find lecturer with this id");

        const updatedLecturer = await Lecturer.findByIdAndUpdate(id, data, {new: true});

        return updatedLecturer;
    },

    delete: async (id) => {
        const lecturer = await Lecturer.findById(id);
        if (!lecturer) throw new Error("can't find lecturer with this id");

        const deletedLecturer = await Lecturer.findByIdAndDelete(id);

        return deletedLecturer;
    },

    markAttendance: async (id, status) => {
        const exists = await Lecturer.findById(id);
        if (!exists) throw new Error("can't find lecturer with this id");

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let record = await AttendanceLog.find({lecturerId: id, date: today});

        if (record) {
            record.status = status;
            record.timestamp = new Date();

            await record.save();
            return record;
        }

        record = await AttendanceLog.create({
            lecturerId: id,
            date: today,
            status,
            timestamp: new Date()
        });

        return record;
    }
}