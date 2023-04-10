import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreatePost({ loggedIn, flashMessage }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn){
            flashMessage('You must be logged in to create a new post', 'danger');
            navigate('/login');
        }
    })

    async function handleSubmit(e){
        e.preventDefault();

        // Get the token from localStorage
        let token = localStorage.getItem('token');

        // Set up the request headers
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);

        let formData = JSON.stringify({
            title: e.target.title.value,
            content: e.target.content.value
        })

        fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.error){
                    flashMessage(data.error, 'danger');
                } else {
                    flashMessage(`Post has been created`, 'success');
                    navigate('/');
                }
            })
    };
    
    return (
        <>
            <h3 className="text-center">Create A Post!</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" className="form-control my-3" placeholder='Enter Title' />
                    <textarea name="content" className="form-control my-3" placeholder='Enter Content' />
                    <input type="submit" value="Create Post" className='btn btn-success w-100' />
                </div>
            </form>
        </>
    )
 }