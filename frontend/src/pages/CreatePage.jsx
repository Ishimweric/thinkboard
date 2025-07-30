import { ArrowLeft } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(){

  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeft className="size-5"/>
            Back to notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create new note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label id="title" className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Note title" 
                    className="input input-bordered"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage