import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("DB connected"));
    await mongoose.connect(`${process.env.MONGO_URI}/pizblog`);
  } catch (e) {
    console.error(e.message);
  }
};
