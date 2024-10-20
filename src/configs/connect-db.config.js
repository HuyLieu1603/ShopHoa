import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("🚀 mongoDB connected")
    } catch(error){
        console.log("MongoDB connected failed!");
        console.log(error.message);
        process.exit(1)
    }
};

export default connectDB;
