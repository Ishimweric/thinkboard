const getAllNotes = (req, res)=>{
  res.status(200).json({"message" : "notes sent successfully"});
}

const createNote = (req, res)=>{
  res.status(201).json({"message" : "note created successfully"})
}

const updateNote = (req, res)=>{
  res.status(200).json({"message" : "note updated succesfully"})
}

const deleteNote = (req, res)=>{
  res.status(200).json({"message" : "note deleted successfully"})
}

export { getAllNotes, createNote , updateNote, deleteNote};