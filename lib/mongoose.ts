import mongoose, { Mongoose } from 'mongoose';

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
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, { dbName: "test" }).then((result) => {
            console.log("Connected to MongoDB");
            return result;
        }).catch((error) => {
            console.error("Error connecting to MongoDB");
            throw error;
        });
    }

    cached.conn = await cached.promise;

    return cached.conn;
}

export default dbConnect;