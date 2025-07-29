import express from "express";
import router from "./routes/notesRoute.js";
const app = express();

app.use("/api/notes", router);

app.listen(3500, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
})