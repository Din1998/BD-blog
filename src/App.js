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
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": 'true',
          'Access-Control-Allow-Origin': '*',
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

  //get blog from server
  const [blog,setBlog] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/api`)
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
