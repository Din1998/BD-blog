import { Link } from "react-router-dom";


export default function Navbar ({user}) {
  const logout = () => {
    window.open("https://server-1998.vercel.app/auth/logout", "_self");
  };
  return(
    <div className="navBar">
      <span className="logo"><Link to='/'>Din</Link></span>
      {
        user ? (
      <ul className="list">
        <li className="listItem">
          <img src={user.photos[0].value} referrerPolicy="no-referrer" alt="prifileImg" className="avatar" />
        </li>
        <li className="listItem">{user.displayName}</li>
        <li className="listItem" onClick={logout}>Logout</li>
      </ul>
      ) : (<Link to="/login">Login</Link>)
    }
    </div>
  )
}