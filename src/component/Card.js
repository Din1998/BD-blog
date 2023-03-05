import { Link } from "react-router-dom";



export default function Card ({blog}) {

  return (

    <div className="card">

      <div className="card__img">
        <Link className="link" to={`/post/${blog._id}`}>
          <img src={blog.imageUrl} alt="" className="img"/>
        </Link>
      </div>

      <div className="card__text">
        <Link className="link" to={`/post/${blog._id}`}>
        <h2 className="title">{blog.title}</h2>
        </Link>
        <p className="desc">{blog.discription}</p>
        
        <Link className="link" to={`/post/${blog._id}`}>
          <button className="card__btn">Reade More</button>
        </Link>
        
      </div>
     
    </div>
   
  )
}