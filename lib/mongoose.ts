import mongoose, { Mongoose } from 'mongoose';
import logger from './logger';

// Database setup file
const MONGODB_URI = process.env.MONGODB_URI as string;

// check MONGODB_URI is defined in .env.local file.
if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined.");
}

interface MongooseCache {
    conn: Mongoose | null,
    promise: Promise<Mongoose> | null;
}

// declare global variable.
declare global {
    var mongoose: MongooseCache;
}

// retrive the global cache varibale
let cached = global.mongoose;

// if cached doesnot exists
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

// connect
const dbConnect = async (): Promise<Mongoose> => {
    // if there is a cache conn, return that connection
    if (cached.conn) {
        logger.info("Using existing mongoose connection");
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { dbName: "test" }).then((result) => {
            logger.info("Connected to MongoDB");
            return result;
        }).catch((error) => {
            logger.error("Error connecting to MongoDB", error);
            throw error;
        });
    }

    cached.conn = await cached.promise;

    return cached.conn;
}

export default dbConnect;