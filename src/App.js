import './App.css';
import { useEffect,useState } from 'react';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import Post from './page/Post';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("https://server-1998.vercel.app/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": '*',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user)

  const [blog,setBlog] = useState([])

  useEffect(() => {
    axios.get(`https://server-1998.vercel.app/api`)
    .then(res => {
      setBlog(res.data)
    }).catch(err => console.log(err))
  },[])



  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={< Home blog={blog}/>}/>
          <Route
            path='/login' 
            element={user ? <Navigate to='/' /> : <Login/>}
          />
          <Route 
            path='/post/:id'
            element={user ? < Post blog={blog}/> : <Navigate to='/login' />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
