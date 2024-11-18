import mongoose from "mongoose";

const connectDB =  async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"))

    await mongose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB