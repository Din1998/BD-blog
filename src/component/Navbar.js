import { Link } from "react-router-dom";


export default function Navbar ({user}) {
  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");
  };
  return(
    <div className="navBar">
      <span className="logo"><Link className="link" to='/'>Din</Link></span>
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
  )
}