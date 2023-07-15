// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import {Routes, Route} from 'react-router-dom';
import Login from './component/login';
import Signup from './component/signup';
import Add_post from './pages/add_post';
import Edit_post from './pages/edit_post';
import DeletePost from './pages/delete_post';
import DeleteComment from './pages/delete_comment';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
 import { createContext } from 'react';
 import UserContext from './component/UserContext';
import Profile from './pages/Profile';
  

function App() {
  
  const [user, setUser] = useState(null);
  function Display() {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
     console.log("the user is " + user) }
    });
  }
    useEffect(() => {
      // auto-login
      
     return Display()
    },[]);

  return (
    <div className="App">
    <UserContext.Provider value={{ user, setUser }}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/home" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/post/add" element={<Add_post />} />
    <Route path="/post/:id/edit" element={<Edit_post />} />
    <Route path="/post/:id/delete" element={<DeletePost />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/comment/:id/delete" element={<DeleteComment />} />
    
  </Routes>
  </UserContext.Provider>
  

    </div>
    
  );
}

export default App;
