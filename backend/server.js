import express from "express";
const app = express();

app.get("/api/notes" , (req, res)=>{
  res.status(200).json({"message" : "notes sent successfully"});
})

app.post("/api/notes" , (req, res)=>{
  res.status(201).json({"message" : "note created successfully"})
})

app.put("/api/notes/:id" , (req, res)=>{
  res.status(200).json({"message" : "note updated succesfully"})
})

app.delete("/api/notes/:id" , (req, res)=>{
  res.status(200).json({"message" : "note deleted successfully"})
})

app.listen(3500, ()=>{
  console.log("SERVER RUNNING ON PORT 3500")
})