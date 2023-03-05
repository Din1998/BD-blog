import axios from "axios"
import {useState,useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import '../css/index.css'

export default function Update() {

  const [blog,updateBlog] = useState("")
  const [input,setInput] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split("/")[2];
  // const post = blogs.find((b) => b._id.toString() === blogId);


  const handleChange = (e) => {
    setInput((prev) => ({...prev,[e.target.name]:e.target.value}))
  }


// get blog by id
  const getBlog = async () => {
    const res = await axios
    .get(`https://server-1998-99cqzuby4-din1998.vercel.app/api/${blogId}`)
    .then((result) => {
      updateBlog(result.data)
      setInput(result.data)
    })
    .catch((err) => console.log(err));
    
  }

useEffect(() => {
  getBlog()
  
},[])



// update blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`https://server-1998-99cqzuby4-din1998.vercel.app/api/${blogId}`,{
        title: input.title,
        discription: input.discription,
        fullDiscription: input.fullDiscription,
        imageUrl: input.imageUrl,
      });
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }


  return(
    <div className="updare_page">
      <h1>Update Blog</h1>
      <div className="form_wraper">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            required={true}
            placeholder="Title"
            value={input.title}
            name="title"
            onChange={handleChange}
          />
          <input 
            type="text" 
            required={true}
            placeholder="Discription"
            name="discription"
            value={input.discription}
            onChange={handleChange}
          />
          <input 
            type="text" 
            required={true}
            placeholder="Full Discription"
            name="fullDiscription"
            value={input.fullDiscription}
            onChange={handleChange}
          />
          <input 
            type="url" 
            required={true}
            placeholder="Image Urls"
            name="imageUrl"
            value={input.imageUrl}
            onChange={handleChange}
          />
          <button>Post</button>
        </form>
      </div>
    </div>
  )
}