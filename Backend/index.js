import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";
import cookieParser from 'cookie-parser';
import cors from "cors";
import { app, server } from './SocketIO/server.js';

const port = 8080

dotenv.config();
const dbUrl = process.env.MONGODB_URI;

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(dbUrl);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);


if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();

    app.use(express.static("./Frontend/dist"));
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(dirPath, "./Frontend/dist", "index.html"))
    })
}
server.listen(port, () => {
    console.log(`app listening on port ${port}`)
})