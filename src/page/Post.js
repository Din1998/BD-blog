import { useLocation } from "react-router-dom"
import {useEffect,useState} from'react';
import { posts } from "../data"

export default function Post({blog}) {
  const [blog,setBlog] = useState([])

  useEffect(() => {
    axios.get(`https://server-1998.vercel.app/api`)
    .then(res => {
      setBlog(res.data)
    }).catch(err => console.log(err))
  },[])


  const location = useLocation();
  const path = location.pathname.split('/')[0];
  const blogs = blog.find((p) => p._id.toString() === path)
  console.log(blog)
  console.log(location)
  return(
    <div className="post__page">
      <img src={blogs.imageUrl} alt="" className="post__img"/>
      <h1 className="post__title">{blogs.title}</h1>
      <p className="post__desc">{blogs.discription}</p>
      <p className="post__longDesc">{blogs.fullDiscription}</p>
    </div>
  )
}