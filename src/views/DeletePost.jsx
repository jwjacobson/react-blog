import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function DeletePost({ loggedIn, flashMessage} ) {
    
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (!loggedIn){
            flashMessage('Log in first', 'danger');
            navigate('/login');
        }
    })

    async function handleSubmit(e){
        e.preventDefault();

        // Get the token from localStorage
        let token = localStorage.getItem('token');

        // Set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        // myHeaders.delete('Content-Type', 'application/json');

        let response = await fetch(`https://kekambas-blog-api.onrender.com/api/posts/${params.postId}`, {
                method: 'DELETE'
                // headers: myHeaders
    });
  
    let data = await response.json();

    if (data.error){
        flashMessage(data.error, 'danger');
    } else {
        flashMessage(`Post deleted`, 'info');
        navigate('/');
    };
    };

    return (
    <div>Deleted</div> 
  )
}
