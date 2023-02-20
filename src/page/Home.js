
import Card from "../component/Card"
import { posts } from "../data"


export default function Home({blog}) {
  

  return(
    <div className="home__section">
      {blog.map(blog => (
        <Card key={blog._id} blog={blog}/>
      ))}
    </div>
  )
}