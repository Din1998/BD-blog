import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export default function AddBlog({blogs}){

  const [blog,addBlog] = useState({
    title: "",
    discription: "",
    fullDiscription: "",
    imageUrl: ""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    addBlog((prev) => ({...prev,[e.target.name]:e.target.value}))
  }

// post blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/api/post",blog);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }

// delete blog
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/${id}`);
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};


  return(
    <div>
      <h1>Hello</h1>
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
      <div>
      {blogs.map(blogs => (
        <div key={blogs._id}>
          <p>{blogs.title}</p>
          <button onClick={() => handleDelete(blogs._id)}>Delete</button>
          <button>
            <Link to={`/update/${blogs._id}`}>
            Update
            </Link>
          </button>
        </div>
      ))}
      </div>
    </div>
  )
}