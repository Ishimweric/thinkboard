import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
import api from "../lib/axios"
import toast from "react-hot-toast"
import Notecard from "../components/Notecard"

const HomePage = () => {
  const [isRateLimited, setRateLimited]= useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchNotes = async ()=>{
      try {
        const res = await api.get("/notes");
        const data = res.data;
        setNotes(data);
        setRateLimited(false);
      }catch (err) {
        console.error("Error fetching data", err);
        if (err.response?.status === 429){
          setRateLimited(true)
        }else{
          toast.error("Failed to fetch notes!")
        }
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && <div className="text-center text-primary py-10">Loading...</div>}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note=>{
              return <Notecard key={note._id} note={note} setNotes={setNotes}/>
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage