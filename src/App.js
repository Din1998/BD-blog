
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
import Footer from './component/Footer';
import LifeStyle from './page/LifeStyle';
import About from './page/About';
import Contact from './page/Contact';

function App() {

  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUser = () => {
  //     fetch("https://server2023.vercel.app/auth/login/success", {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": 'application/json',
  //         "Access-Control-Allow-Credentials": 'true',
  //         "Access-Control-Allow-Origin": '*',
  //         "Access-Control-Allow-Headers": ' Authorization',
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         setUser(resObject.user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

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
        <Navbar  />
        <Routes>
          <Route path='/' element={< Home blog={blogs}/>}/>
          <Route path='/dashboard' element={<AddBlog blogs={blogs} />}/>
          <Route path='/Lifestyle' element={ <LifeStyle />}/>
          <Route path='/About' element={ <About />}/>
          <Route path='/Contact' element={ <Contact />}/>
          
          <Route 
            path='/post/:id'
            element={ < Post blog={blogs} />}
          />
          <Route path="/update/:id" element={<Update blogs={blogs}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
