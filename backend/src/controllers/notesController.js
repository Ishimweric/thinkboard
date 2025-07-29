import mongoose from "mongoose";
import Note from "../models/Notes.js"
const getAllNotes = async (req, res)=>{
  try{
    const notes = await Note.find({});
    res.status(200).json(notes)
  }catch(err){
    res.status(500).json({"error" : "Internal server error"});
    console.error("Failed to get data")
  }
}

const createNote = async (req, res)=>{
  try{
    const {title, content} = req.body;
    const newNote = new Note({ // mongoose way to insert a doc in a collection
      title,
      content
    });
    await newNote.save();
    res.status(201).json(newNote)
  }catch(err){
    res.status(500).json({"message" : 'Server error'})
  }
}

const updateNote = async (req, res)=>{
  try {
    const {title, content} = req.body;
    const {id} = req.params;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({"message" : "Invalid id"})
    }

    const updatedNote = await Note.findByIdAndUpdate(id, {
      title,
      content
    });
    res.status(200).json(updatedNote);
  }catch (err) {
    res.status(500).json(err)
  }
}

const deleteNote = (req, res)=>{
  res.status(200).json({"message" : "note deleted successfully"})
}

export { getAllNotes, createNote , updateNote, deleteNote};