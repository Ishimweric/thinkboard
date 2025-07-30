import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
import axios from "axios"

const HomePage = () => {
  const [isRateLimited, setRateLimited]= useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchNotes = async ()=>{
      try {
        const res = await axios.get("http://localhost:3500/api/notes");
        console.log(res);
        console.log(res.data)
      }catch (err) {
        console.error("Error fetching data", err)
      }
    }
    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage