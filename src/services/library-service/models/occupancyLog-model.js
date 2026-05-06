import { Schema, model } from "mongoose";

const occupancyLogSchema = new Schema({
    libraryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Library"
    },
    count: {
        type: Number,
        required: true,
        default: 0,
    },
    timeStamp: {
        type: Date,
        required: true
    }
});

export const OccupancyLog = model("OccupancyLog", occupancyLogSchema);