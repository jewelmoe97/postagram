import React, { useContext } from "react";
// import { UserContext } from "./UserContext";
import "../style/nav.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const user = useContext(UserContext);


  
  function handleSubmit(e) {
    e.preventDefault();
    // let url = "http://localhost:3000/login";
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
     
      
    }).then((r) => {
      
      if (r.ok) {
        r.json().then((user) => {navigate("/home")
      console.log(user)
    });
        // setUser({ username });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  
   
  
    




  


    return (
<div>

<div className="container">
    <div className="content">
    {errors.map((err) => (
      <h5 className="text-danger" key={err}>{err}!</h5>
    ))}
      <form onSubmit={handleSubmit} className="content__form">
        <div className="content__inputs">
          <label>
          <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            
          </label>
          <label>
           
            <input
      type="password"
      id="password"
      placeholder="*****"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
          </label>
        </div>
        <button>Log In</button>
      </form>
      <div className="content__or-text">
        <span></span>
        <span>OR</span>
        <span></span>
      </div>
      <div className="content__forgot-buttons">
       
         
          <Link to="/signup">Signup</Link>
       
        
      </div>
    </div>
  </div>



</div>


    )
}



export default Login;