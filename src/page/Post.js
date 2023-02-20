import { useLocation } from "react-router-dom"
import { posts } from "../data"

export default function Post({blog}) {
  const location = useLocation();
  const path = location.pathname.split('/')[0];
  const post = blog.find((p) => p._id.toString() === path)
  console.log(blog)
  console.log(location)
  return(
    <div className="post__page">
      <img src={blog.imageUrl} alt="" className="post__img"/>
      <h1 className="post__title">{blog.title}</h1>
      <p className="post__desc">{blog.discription}</p>
      <p className="post__longDesc">{blog.fullDiscription}</p>
    </div>
  )
}