
import { useEffect,useState } from 'react';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import Post from './page/Post';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import axios from "axios";
import AddBlog from './page/AddPost';
import Update from './page/Update';
import './css/index.css'

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      await axios
      .get(`https://server2023.vercel.app/auth/login/success`)
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



  //get blog from server
  const [blogs,setBlog] = useState([])

  useEffect(() => {
    const getAllPost = async () => {
      try{
        const res = await axios.get(`https://server2023.vercel.app/api`);
        setBlog(res.data)
      } catch(err) {
        console.log(err)
      }
    };
    setInterval(() => getAllPost(), 3000)
    
  },[])



  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={< Home blog={blogs}/>}/>
          <Route path='/dashboard' element={<AddBlog blogs={blogs} />}/>
          <Route
            path='/login' 
            element={user ? <Navigate to='/' /> : <Login/>}
          />
          <Route 
            path='/post/:id'
            element={user ? < Post blog={blogs}/> : <Navigate to='/login' />}
          />
          <Route path="/update/:id" element={<Update blogs={blogs}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
