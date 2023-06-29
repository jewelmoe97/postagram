import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

function  Nav(){

    return (
        <div>
        <section class="stage">
        <div id="home" class="div"><p id="homep" class="p"><Link to="/">Home</Link></p></div>
        <div class="div" id="about"><p class="p"><Link to="/about">Profile</Link></p>
        </div>
        <div class="div" id="contact"><p class="p">Posts</p>
        </div>
        <div class="div" id="gallery"><p class="p"><Link to="/post/add">Add Post</Link></p>
        </div>
        <div class="div" id="gallery"><p class="p">Logout</p>
        </div>
      </section>
        
        </div>
    )
}















export default Nav;