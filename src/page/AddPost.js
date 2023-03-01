import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import '../css/index.css'

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
    <div className="addblog_page">
      <h1>Add New Blog</h1>
      <div className="content_wraper">
          <div className="form_wraper">
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <input 
                type="text"
                required={true}
                
                name="title"
                onChange={handleChange}
              />
              <label>Discription</label>
              <input 
                type="text" 
                required={true}
                
                name="discription"
                onChange={handleChange}
              />
              <label>Full Discription</label>
              <input 
                type="text" 
                required={true}
              
                name="fullDiscription"
                onChange={handleChange}
              />
              <label>Image Urls</label>
              <input 
                type="url" 
                required={true}
                
                name="imageUrl"
                onChange={handleChange}
              />
              <button>Post</button>
            </form>
          </div>
        
          <div className="blog_list">
            <p>All blogs</p>
            {blogs.map(blogs => (
              <div className="blog" key={blogs._id}>
                <p>{blogs.title}</p>
                <div className="act_btn">
                  <button className="delete_btn" onClick={() => handleDelete(blogs._id)}>Delete</button>
                  <button>
                    <Link className="link" to={`/update/${blogs._id}`}>
                    Update
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}