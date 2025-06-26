import mongoose from "mongoose";
import app from "./index";
import {subscribeMessage} from './nats/bus';

const LOCAL_PORT = process.env.LOCAL_PORT;
const MONGO_URL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`MongoDB connection successful - Search DB`);
  } catch (error) {
    console.log(error);
  }
};

connectDB();
subscribeMessage();


app.listen(LOCAL_PORT, () => {
  console.log(`Server running on ${LOCAL_PORT}`);
});
