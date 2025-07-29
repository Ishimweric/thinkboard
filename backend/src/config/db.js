import mongoose from "mongoose"

const connectDB = async ()=>{
  try{
    await mongoose.connect(process.env.DB_CONNECTION_URI);
    console.log("DB CONNECTED SUCCESFULLY");
  }catch(err){
    console.error(err);
    process.exit(1); // 1 means exit with failure
  }
}

export {connectDB}