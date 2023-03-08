import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import '../css/index.css'

export default function AddBlog(){

  const [isPending,setPending] = useState(true)
  const [blogs,setBlog] = useState([])

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

// get all blog
  useEffect(() => {
    const getAllPost = async () => {
      try{
        const res = await axios.get(`https://server2023.vercel.app/api`);
        setBlog(res.data)
        setPending(false)
      } catch(err) {
        console.log(err)
      }
    };
    getAllPost()
    
  },[])



// post blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("https://server2023.vercel.app/api/post",blog);
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }

// delete blog
const handleDelete = async (id) => {
  try {
    await axios.delete(`https://server2023.vercel.app/api/${id}`);
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
              <textarea
                typeof="text"
                required={true}
                name="discription"
                onChange={handleChange}
              />
              
              <label>Full Discription</label>
              <textarea 
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
            { isPending && <div className="loading__component">
            <h1>BD Blog</h1>
            <p>Loading...</p>
            </div> }
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