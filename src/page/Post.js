import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
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
         
      <img src={post.imageUrl} alt="" className="post__img"/>
      <h1 className="post__title">{post.title}</h1>
      <h2 className="post__desc">{post.discription}</h2>
      <p className="post__longDesc">{post.fullDiscription}</p>
      <div className="date__">
        <p className="current_date">{new Date(post.date).toDateString()}</p>
        <Link className="link" to='/dashboard'>
          <FontAwesomeIcon  className="edit__icon" icon={faEdit} />
        </Link>
        
      </div>
      
    </div>
  )
}