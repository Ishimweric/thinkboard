import express from "express";
import router from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3500;

connectDB().then(()=>{
  app.listen(PORT, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
  })
})

//middlewares
app.use(express.json());
app.use(rateLimiter);
app.use(cors({
  origin: "http://localhost:5173"
}))

app.use("/api/notes", router);