import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const url =
      "mongodb+srv://iims:iims123@riimongodb.1wfzs.mongodb.net/mini-amazon?retryWrites=true&w=majority&appName=riimongodb";

    await mongoose.connect(url);

    console.log("DB connection successful....");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default dbConnect;
