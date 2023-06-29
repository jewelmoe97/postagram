import React from "react";
// import "../style/nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [email, setEmail] = useState("");
  
  const [errors, setErrors] = useState([]);
  function handleSubmit(e){
e.preventDefault()
// let url = "http://[::1]:3000/signup";
setErrors([]);
    
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl
        
      }),
    }).then((r) => {
     
      if (r.ok) {
        r.json().then((user) =>console.log(user));
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
      <p className="text-danger" key={err}>{err}!</p>
    ))}
      <form onSubmit={handleSubmit} className="content__form">
        <div className="content__inputs">

        <label>
            <input required="" type="text" id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            
          </label>
          <br/>
          <label>
            <input required="" type="text" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"/>
            
          </label>
          <br/>
          <label>
            <input required=""  type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" placeholder="Password"/>
            
          </label>
          <br/>
          <label>
            <input required=""  type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password" placeholder="Confirm password"/>
            
          </label>
          <br/>

          <label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="imageUrl"
      />
      </label>
        </div>
        <button type="submit">Register</button>
        
      </form>
      
      <div className="content__forgot-buttons">
       
      <p>Already have an account?</p>
      <Link to="/">Login</Link>
      
        
      </div>
    </div>
  </div>



</div>


    )
}



export default Signup;