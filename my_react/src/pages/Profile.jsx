import React from "react";
import { Link } from "react-router-dom";
import UserContext from "../component/UserContext";
import { useContext } from "react";
import CountUp from 'react-countup';
import  ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react"; 

function Profile(){
    const { user, setUser  } = useContext(UserContext);
const[count, setcount] = useState(false);

return(

<div className="container-fluid d-flex justify-content-center align-items-center flex-column mt-5 border border-dark p-3" style={{width:50+"%"}}>
       

<Link to={`/home`} className="btn btn-primary mx-1"><i className="fa-solid fa-arrow-left-long fa-beat fs-1"></i></Link><br/>
<img src= {user?.image_url} className="mt-5 img img-fluid rounded-circle outline outline-dark " style={{width:300+"px" , height:300+"px" }}/>

  

{user ? (
    <h3> {user?.username}</h3>
    
  ) : (
    <p>Loading user data...</p>

  )}
  <h5> {user?.email}</h5>
  <h3 className="mt-3">My Posts </h3>
  <ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(false)}><br/>
  {count && <span className="fs-2 px-3 py-1 border border-dark"><CountUp delay={0} end={user?.posts?.length} duration={4} /></span>} </ScrollTrigger> <br/>  

<div className="row d-flex justify-content-center align-items-center g-3 ">
  {user?.posts?.map((one) => (
    <div className="col-6"><img classNme="img img-fluid" style={{width:400+"px" , height:400+"px" }} src={one?.image} key={one?.id} /></div>
  ))}
  </div>
  </div>





);

}

export default Profile;