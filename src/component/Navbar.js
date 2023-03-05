import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFacebook,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../css/index.css'

export default function Navbar ({user}) {
  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };
  return(
    <header className="mst__header" role='banner'>
        <div className="header">
          <div className="icons">
            <FontAwesomeIcon className="header_icon" icon={faTwitter} />
            <FontAwesomeIcon className="header_icon" icon={faFacebook} />
            <FontAwesomeIcon className="header_icon" icon={faInstagram} />
            <FontAwesomeIcon className="header_icon" icon={faYoutube} />
          </div>
          <div className="logo"><Link className="link" to='/'><h1>BD Blog</h1></Link></div>
          <div className="login">
            {
              user ? (
            <ul className="list">
              <li className="listItem">
                <img src={user.photos[0].value} referrerPolicy="no-referrer" alt="prifileImg" className="avatar" />
              </li>
              <li className="listItem">{user.displayName}</li>
              <li className="listItem" onClick={logout}>Logout</li>
            </ul>
            ) : (<Link className="link" to="/login">Login</Link>)
            }
          </div>
        </div>
        
        <div className="nav_items">
            <nav>
              <a href="#">Home</a>
              <a href="#">Life Style</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
        </div>
        

    </header>
    
  )
}