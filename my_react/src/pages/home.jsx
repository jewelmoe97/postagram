import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createContext } from "react";
import { useContext } from "react";
import "../App.css"
import Nav from "../component/nav";
import { Link } from "react-router-dom";
import UserContext from "../component/UserContext";


function  Home (){
//     const Url = 'http://[::1]:3000/posts';
    const navigate = useNavigate();
    const [all, setAll] = useState([]);
    const[comment,setComment]= useState(" ");
    
//  const [user, setUser] = useState(null);
const [currentPost, setCurrentPost] = useState(null);
const [liked, setLiked] = useState(false);

const { user } = useContext(UserContext);




function display() {
  fetch("/posts", {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setAll(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// const handleLike = () => {
//     fetch(`/likes`, { method: 'POST' })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setLiked(true);
//         }
//       });
//   };

  
  

//   const handleUnlike = () => {
//     fetch(`/likes`, { method: 'DELETE' })
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setLiked(false);
//         }
//       });
//   };


useEffect(() => {

    

    // fetch("/me").then((r) => {
    //     if (r.ok) {
    //          r.json().then((users) => setUser(users));
    //      console.log("it is ok" ) }
    //     });
   
  return display();
}, []);

const handleLike = (postId) => {
    // Create a new like
    return function(e){
        e.preventDefault();
        
    fetch(`/posts/${postId}/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: {user_id: user.id, post_id: postId }}),
    })
      .then(response => response.json())
      .then(data => {
        setLiked(true);
        console.log(data);
        return display();
      });
      
  };

}

const handleUnlike = (postId) => {
    return function(e){
        e.preventDefault();
    fetch(`/posts/${postId}/likes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: { user_id: user.id, post_id: postId } }),
    })
      .then((data) => {
        setLiked(false);
        console.log(data);
        return display();
      });
  };
}
  

     function handleLogoutClick() {
        
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            
            navigate("/");
          }
        });
      }


     function handleSubmit(postId) {
        return function(e){
        e.preventDefault();
        console.log("submit")
        console.log(comment)
        fetch("/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id :user.id,
           post_id :postId,
           text: comment
          
            
          }),
        }) 
        .then(response => {
            if (response.ok) {
             
              console.log("submitted!");
              return display();
            }
          });
         }
        }
     return (
      
      
  <div>
  
  
<header>


    <nav className="navbar p-2 text-center">
        <div className="container">
            <div className="logo">
                <a href="#">
                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609090809/download-200x200.png"
                    alt="img1" width="40px" height="40px"/>
                </a>
            </div>
            <div>
            {user ? (
                <p>Welcome {user.username}</p>
              ) : (
                <p>Loading user data...</p>
              )}</div>
           
            <div class="div" id="gallery"><p class="p"><Link to="/post/add">Add Post</Link></p>
            </div>
            <div className="nav-links">
                <ul className="nav-group">
                    
                    <li  onClick={handleLogoutClick}>
          <a>Logout</a>
        </li>
                    
                   
                    <li className="nav-item">
                        <div className="action">
                            <div className="profile"
                                onclick="menuToggle()">
                                <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                                    alt="user Avatar"/>
                                    
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>


<main>
    <div className="container">
        <div className="col-9">
            <div className="statuses">
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-300x243.png"
                            alt="img3"/>
                    </div>
                </div>
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                            alt="img4"/>
                    </div>
                </div>
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093241/g3-200x200.png"
                            alt="img5"/>
                    </div>
                </div>
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png"
                            alt="img6"/>
                    </div>
                </div>
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                            alt="img7"/>
                    </div>
                </div>
                <div className="status">
                    <div className="image">
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220604085434/GeeksForGeeks-300x243.png"
                            alt="img8"/>
                    </div>
                </div>
            </div>
            
            {all.map((post) => (
                
            

            <div className="card">
                <div className="top">
                    <div className="userDetails">
                        <div className="profilepic">
                            <div className="profile_img">
                                <div className="image">
                                
                                    <img src={post.user.image_url}

                                        alt="img8"/>
                                </div>
                            </div>
                        </div>
                        <h3>{post.user.username}
                            <br/>
                            
                    </h3>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="imgBx">
                    <img src={post.image}
                    

                        alt="post-1" className="cover"/>
                        
                       
                </div>
                
                < div className="bottom">
                    <div className="actionBtns">
                        <div className="left">
                            <span className="heart"
                                onclick="addlike()">
                                <span>
                                    
                                </span>
                            </span>
                            
                            
                        </div>
                        <div className="right">
                            
                        </div>
                    </div>
                    <h4>{post.caption}</h4>
                    <br/>
                    
                    
                    <i class="fa-solid fa-heart  fs-1 mx-3" onClick={handleLike(post.id)}></i>
                    <i class="fa-regular fa-thumbs-down fs-1 mx-3" onClick={handleUnlike(post.id)}></i>
                    <Link to={`/post/${post.id}/edit`} className="mx-1"><i class="fa-solid fa-pen-to-square fs-1"></i></Link>
                    <Link to={`/post/${post.id}/delete`} className=" mx-1"><i class="fa-solid fa-trash fs-1 text-danger"></i></Link><br/>
<span>{post.likes.length}likes</span>
                    {post && post?.likes?.map((one, index) => {
                        return (<span className=" p-1 mt-2  mx-auto " key={index}>
                       
                        <img src={one.user.image_url} width={40+"px"} height={40+"px"} style={{borderRadius:100+"%"}}/>
                        
                        
                      </span>
                        )})}

                    {post && post?.comments?.map((one, index) => {
                        return (<div className="border border-dark p-1 mt-2 d-flex justify-content-center align-items-center mx-auto text-center flex-column" key={index}>
                        
                        <p className="text-center">By: {one.user.username}  </p> 
                        <p className="text-center"> {one.text}</p>
                        <Link to={`/comment/${one.id}/delete`} className=" mx-1"> <i class="fa-solid fa-trash-can fs-4 mx-3 text-danger"></i></Link>
                        
                      </div>
                        )})}
                    
                    <div className="addComments">
                        <div className="reaction">
                            <h3>
                            <i className="far fa-smile"></i>
                            </h3>
                        </div>
                        <form>
                        

                            <input type="text"
                            className="text"
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Add a comment..."
                          />
                        
                          <button onClick={handleSubmit(post.id)} className="btn btn-primary ">Submit</button>
  
                        </form>
                    </div>
                </div>
            </div>
             
      ) )}
                    
        
            </div>	
        
                    
     
            <div className="footer">
                <a className="footer-section" href="#">About</a>
                <a className="footer-section" href="#">Help</a>
                <a className="footer-section" href="#">API</a>
                <a className="footer-section" href="#">Jobs</a>
                <a className="footer-section" href="#">Privacy</a>
                <a className="footer-section" href="#">Terms</a>
                <a className="footer-section" href="#">Locations</a>
                <br/>
                <a className="footer-section" href="#">Top Accounts</a>
                <a className="footer-section" href="#">Hashtag</a>
                <a className="footer-section" href="#">Language</a>
                <br/>
                <span className="footer-section">
                    © 2023 INSTAGRAM FROM FACEBOOK
                </span>
            </div>
        </div>
    
    
</main>

        
        </div>
        
    )
}














export default Home;