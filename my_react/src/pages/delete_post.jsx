import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function DeletePost() {
//   const history = useHistory();
  const { id } = useParams();
  const navigate = useNavigate();
  function PostDelete() {
    fetch(`/posts/${id}`, { method: 'DELETE' })

      .then(response => {
        if (response.ok) {

          response.json().then((sus) => {

            alert(sus.message)
          });

        
        navigate('/home');

        } else {

          response.json().then((err) => {

            alert(err.errors)
          });

        
        navigate('/home');

        }
      })

      .catch(error => {
        // handle error response

        console.log(error);
      });
  }
  useEffect(() => {


    PostDelete()

  }, []);



  return (<div>
    




  </div>)


}


export default DeletePost;