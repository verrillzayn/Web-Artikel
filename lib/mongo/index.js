import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connectToMongoDb = async () =>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default connectToMongoDb;
