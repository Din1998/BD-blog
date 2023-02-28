import { Link } from "react-router-dom";



export default function Card ({blog}) {

  return (

    <div className="card">
      <Link className="link" to={`/post/${blog._id}`}>
      <img src={blog.imageUrl} alt="" className="img"/>
      <h2 className="title">{blog.title}</h2>
      <p className="desc">{blog.discription}</p>
      <button className="card__btn">Reade More</button>
      </Link>
    </div>
   
  )
}