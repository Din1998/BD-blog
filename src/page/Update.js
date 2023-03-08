import axios from "axios"
import {useState,useEffect} from "react"
import { useLocation, useNavigate } from "react-router-dom";
import '../css/index.css'

export default function Update() {


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
    .get(`https://server2023.vercel.app/api/${blogId}`)
    .then((result) => {
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
      await axios.put(`https://server2023.vercel.app/api/${blogId}`,{
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
        <label>Title</label>
          <input 
            type="text"
            required={true}
            placeholder="Title"
            value={input.title}
            name="title"
            onChange={handleChange}
          />
          <label>Discription</label>
          <textarea
            type="text" 
            required={true}
            placeholder="Discription"
            name="discription"
            value={input.discription}
            onChange={handleChange}
          />
          <label>Full Discription</label>
          <textarea
            type="text" 
            required={true}
            placeholder="Full Discription"
            name="fullDiscription"
            value={input.fullDiscription}
            onChange={handleChange}
          />
          <label>Image Urls</label>
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