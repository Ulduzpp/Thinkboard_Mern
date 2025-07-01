import mongoose from "mongoose";


export const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGOBD CONNECTED SUCCESSFULLY!");
    } catch(error){
        console.error("Error connecting to MONGODB!");
        process.exit(1); //exit with failure
    }
};