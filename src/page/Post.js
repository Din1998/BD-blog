import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import '../css/index.css';
import '../App.css';


export default function Post() {
  
  const location = useLocation();
  const blogId = location.pathname.split('/')[2];


  const [post,getPost] = useState("");


  const getBlog = async () => {
   await axios
    .get(`https://server2023.vercel.app/api/${blogId}`)
    .then((result) => {
      getPost(result.data)
    })
    .catch((err) => console.log(err));
  }


  useEffect(() => {
    getBlog()
    
  })




  return(
    <div className="post__page">
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
      <img src={post.imageUrl} alt="" className="post__img"/>
      <h1 className="post__title">{post.title}</h1>
      <h2 className="post__desc">{post.discription}</h2>
      <p className="post__longDesc">{post.fullDiscription}</p>
      <p className="current_date">{new Date(post.date).toDateString()}</p>
      </motion.div>
    </div>
  )
}