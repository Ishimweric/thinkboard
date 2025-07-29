import mongoose from "mongoose";
import Note from "../models/Notes.js"
const getAllNotes = async (req, res)=>{
  try{
    const notes = await Note.find({}).sort({"createdAt" : -1}); // newest first
    res.status(200).json(notes)
  }catch(err){
    res.status(500).json({"error" : "Internal server error"});
    console.error("Failed to get data")
  }
}

const getNote = async (req, res)=>{
  try{
    const {id} = req.params;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({"message" : "Invalid id"})
    }
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({"message" : "Note not found"})
    }else{
      res.status(200).json(note);
    }
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
    }, {new : true});

    // check if the note with a certain id was found
    if (!updatedNote) {
      return res.status(404).json({"message" : "Note not found"})
    }else{
      res.status(200).json(updatedNote);
    }
  }catch (err) {
    res.status(500).json(err)
  }
}

const deleteNote = async (req, res)=>{
  try{
    const {id} = req.params;
    // check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({"message" : "Invalid id"})
    }
    const deletedNote = await Note.findByIdAndDelete(id);

    // check if the note with a certain id was found
    if (!deletedNote) {
      return res.status(404).json({"message" : "Note not found"})
    }else{
      res.status(200).json(deletedNote);
    }
  }catch(err){
    res.status(500).json({"message" : "Server Error"})
  }
}

export { getAllNotes, createNote , updateNote, deleteNote, getNote};