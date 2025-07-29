import express from "express";
import router from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();

connectDB();

const PORT = process.env.PORT || 3500;

app.use("/api/notes", router);

app.listen(PORT, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
})