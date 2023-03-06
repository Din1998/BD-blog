import { useLocation } from "react-router-dom"
import '../css/index.css'
import '../App.css'


export default function Post({blog}) {
  
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const post = blog.find((b) => b._id.toString() === path);

  return(
    <div className="post__page">
      <img src={post.imageUrl} alt="" className="post__img"/>
      <h1 className="post__title">{post.title}</h1>
      <h2 className="post__desc">{post.discription}</h2>
      <p className="post__longDesc">{post.fullDiscription}</p>
      <p className="current_date">{new Date(post.date).toDateString()}</p>
    </div>
  )
}