import express from "express";
//const express= require("express")
import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dontenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dontenv.config();

const app=express();
const PORT= process.env.PORT || 5001


//middleware
app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json()); // This middleware will parse json bodies: req.body
app.use(rateLimiter);

// Our simple custom middle ware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} and Req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


connectDb().then(() => {
    app.listen(PORT, () =>{
    console.log("Server started on PORT:", PORT);
});
});






























// app.get("/api/notes", (req,res) => {
//     res.status(200).send("You have got 30 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message:"Note created successfully!"});
// });

// app.put("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note updated successfully!"});
// });

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note deleted successfully!"});
// });



//mongodb+srv://upakpoor:KCPwpQeNWlNBO57E@cluster0.c4nusor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
