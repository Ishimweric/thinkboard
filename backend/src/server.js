import express from "express";
import router from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import path from "path"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;
const __dirname = path.resolve()

connectDB().then(()=>{
  app.listen(PORT, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
  })
})

//middlewares
if (process.env.NODE_ENV !== "production"){
  // only use cors in development
  app.use(cors({
    origin: "http://localhost:5173"
  }))
}

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", router);

//only do this in production
if (process.env.NODE_ENV === "production"){
  // for deployment
  app.use(express.static(path.join(__dirname,"../frontend/dist")));
  app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  })
}