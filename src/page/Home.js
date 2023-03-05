
import Card from "../component/Card"



export default function Home({blog}) {
  
  return(
    <div className="home__section">
      <div className="card__container">
        {blog.map(blog => (
          <Card key={blog._id} blog={blog}/>
        ))}
      </div>
      <div className="right__content">
          <div className="feature__content">
            <h1>Feature content</h1>
          </div>
      </div>
    </div>
  )
}