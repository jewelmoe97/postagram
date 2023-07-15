import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


  function Add_post(){
const[url,setUrl]= useState(" ");
const[caption,setCaption] =useState(" ");
const navigate = useNavigate();

    function handleSubmit(e){
       e.preventDefault(); 
       console.log("submitted!");
       console.log(url);
       console.log(caption);

       fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         image: url,
          caption: caption
        }),
      }).then((r) => {
        
        if (r.ok) {
          // console.log("work");
          r.json().then((sus) =>alert(sus.message));
          // history.push("/");
        } else {
          r.json().then((err) =>alert(err));
        }
      });
      navigate('/home');
    }

    
    return (
        <div className="container-fluid mt-5" style={{width:60+"%"}}>
       
        <form>
        <Link to={`/home`} className="btn btn-primary mx-1"><i className="fa-solid fa-arrow-left-long fa-beat fs-1"></i></Link><br/>
        
  <div className="mb-3">
    <label for="url" className="form-label">image url</label>
    <input type="text" onChange={(e)=>setUrl(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="caption" className="form-label">Write your caption.</label>
    <input type="text" onChange={(e)=>setCaption(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
        </div>
    )
  }



  export default Add_post;