import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import '../css/index.css';



export default function Card ({blog}) {

  return (
 
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 70,
            restDelta: 0.001
          }
        }}
    
    >
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
          <p className="pub__date">{new Date(blog.date).toDateString()}</p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "just", stiffness: 400, damping: 10 }}
          >
            <Link className="link" to={`/post/${blog._id}`}>
            <button className="card__btn">Read More...</button>
            </Link>
          </motion.div>
        
        
      </div>
     
    </div>
    </motion.div>

  )
}