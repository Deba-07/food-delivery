import mongoose from "mongoose";
import { DB_URI } from "../config/env.js"

if(!DB_URI){
    throw new Error("Please define the MONGODB_URI enviornment variable inside .env<development/production>.local")
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("connected to database.")
    } catch (error) {
        console.error('Error connecting to database: ', error);
        process.exit(1)
    }
}

export default connectToDatabase;