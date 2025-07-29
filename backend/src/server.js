import express from "express";
import router from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const app = express();

connectDB().then(()=>{
  app.listen(PORT, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
  })
})

const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes", router);