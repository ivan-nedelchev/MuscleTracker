import mongoose from "mongoose";
import { User } from "./schemas/User.js";
const connectionString = 'mongodb://localhost:27017/MuscleTracker';

export async function initDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log("Database connected");
    } catch (err) {
        process.exit(1);
    }
}
