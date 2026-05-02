import mongoose from "mongoose";

export const dbConnection = async () => {
    const mongoUri = process.env.MONGO_URI;

    try {
        const conn = await mongoose.connect(mongoUri);
        console.log(`db connected ${conn.connection.host}`);
    }
    catch (err) {
        console.log(`db connection error ${err.message}`);
        process.exit(1);
    }
}