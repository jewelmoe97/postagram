import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Edit_post(){
    const { id } = useParams();
    const [image, setImage] = useState();
    const [caption, setCaption] = useState();
    const [post,setPost] = useState();
    const navigate = useNavigate();



    useEffect(() => {
        fetch(`/posts/${id}`)
        .then((res)=>{
            return res.json();
            
          })
    
          .then((result)=>{
            console.log(result.length);
            return setPost(result);
          })
    
          .catch((err)=>{
            console.log(err);
          })
      }, []);
    function handleSubmit(e){
        e.preventDefault(); 
        console.log("edited!");
        console.log(image);
        console.log(caption);
        
 
        fetch(`/posts/${id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
          image: image,
           caption: caption
         }),
       }).then((r) => {
         
         if (r.ok) {
           // console.log("work");
           r.json().then((sus) =>alert(sus.message));
           // history.push("/");
         } else {
           r.json().then((err) =>alert(err.errors));
         }
       });
       navigate('/home');
     }


    return(
        <div className="container-fluid mt-5" style={{width:60+"%"}}>
        {post && <React.Fragment>
        <form>
        <Link to={`/home`} className="btn btn-primary mx-1"><i className="fa-solid fa-arrow-left-long fa-beat fs-1"></i></Link><br/>
  <div className="mb-3">
    <label for="image" className="form-label">Image URL</label>
    <input type="text"  placeholder={post ? post.image : ""} 
    value={image} onChange={(e)=>setImage(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  
  <div className="mb-3">
    <label  for="caption" className="form-label"> Caption</label>
    <input type="text"   placeholder={post ? post.caption : "" } 
     value={caption}
    onChange={(e)=>setCaption(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button onClick={handleSubmit} className="btn btn-primary">Edit</button>
</form>
</React.Fragment>}
        </div>
    )
}

export default Edit_post;