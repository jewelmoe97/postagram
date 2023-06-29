import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function DeleteComment() {
//   const history = useHistory();
  const { id } = useParams();
  const navigate = useNavigate();
  function CommentDelete() {
    fetch(`/comments/${id}`, { method: 'DELETE' })

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


  return  CommentDelete()

  }, []);



  return (<div>
    




  </div>)


}


export default DeleteComment;