import  { mongoose } from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async()=>{
    try {
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB Host: ${connetionInstance.connection.host} DB Name:${DB_NAME}`);
    } catch (error) {
        console.log("Mongodb connection failed", error);
        process.exit(1)
    }
}

export default connectDB;
