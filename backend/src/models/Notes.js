import mongoose from "mongoose"

// 1. Eric first create a schema
// 2. Then create a model based on that schema

const notesSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true
  },

  content : {
    type : String,
    required : true
  }
}, {timestamps : true});

const Note = mongoose.model("Note", notesSchema);

export default Note