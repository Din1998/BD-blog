import axios from "axios"
import {useState} from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Update({blogs}) {

  const [blog,updateBlog] = useState({
    title: "",
    discription: "",
    fullDiscription: "",
    imageUrl: ""
  })
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  const post = blogs.find((b) => b._id.toString() === blogId);

console.log(post)

  const handleChange = (e) => {
    updateBlog((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

// post blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:8000/api/${blogId}`,blog);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }


  return(
    <div>
      <h1>update</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          
          required={true}
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <input 
          type="text" 
         
          required={true}
          placeholder="Discription"
          name="discription"
          onChange={handleChange}
        />
        <input 
          type="text" 
          
          required={true}
          placeholder="Full Discription"
          name="fullDiscription"
          onChange={handleChange}
        />
        <input 
          type="url" 
          required={true}
          placeholder="Image Urls"
          name="imageUrl"
          onChange={handleChange}
        />
        <button>Post</button>
      </form>
    </div>
  )
}