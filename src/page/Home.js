import { useState,useEffect } from "react";
import axios from "axios";
import Card from "../component/Card";
import FollowCard from "../component/FollowCard";
import FeaturePost from "../component/FeaturePost";




export default function Home() {

  const [blogs,setBlog] = useState([])
  const [isPending,setPending] = useState(true)

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

  
  return(
    <div className="home__section">
      
      <div className="card__container">
        { isPending && <div className="loading__component">
          <h1>BD Blog</h1>
          <p>Loading...</p>
          </div> }
        {blogs.map(blog => 
        <Card key={blog._id}  blog={blog}/>)}
      </div>
      
      <div className="right__content">
          <div className="feature__content">
            <div className="feature__content__component">
              <FeaturePost />
            </div>
            <div className="follow__card">
              <FollowCard />
            </div>
          </div>
      </div>

    </div>
  )
}