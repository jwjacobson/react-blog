import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <div className="card mt-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="card-img-top" src={post.image_url} alt="random" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">{ post.date_created }</h6>
                        <h5 className="card-title">{ post.title }</h5>
                        <h6 className="card-subtitle">By: { post.author.username }</h6>
                        <p className="card-text">{ post.content }</p>
                        <Link className='btn btn-primary' to={`/posts/${post.id}`}>See More</Link>
                        <Link className='btn btn-warning mx-1' to={`/edit/${post.id}`}>Edit</Link>
                        <Link className='btn btn-danger mx-1' to={`/delete/${post.id}`}>Delete</Link>


                    </div>
                </div>
            </div>
        </div>
    )
}
