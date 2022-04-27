import React, { useEffect, useState } from "react";
import { getUserPost } from "./PostsManager";

import { Link } from "react-router-dom";


export const UserPostsList = () => {
    const [posts, setPosts] = useState([])
    const [currentUser, setUser] = useState()
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        setUser(localStorage.getItem("token"))
    }, [refresh])


    useEffect(() => {
        getUserPost(currentUser)
            .then((data) => setPosts(data))
            .then(() => setRefresh(false))
    }, [currentUser, refresh])


    return (
        <>
            <ul className="postsList">
                <h2>My Posts</h2>
                {posts.map(
                    (post) => {
                        return <li className="card post--list" key={`post--${post.id}`}>
                                <div key={`post--${post.id}`}>
                                    <h2 className="postTitle">
                                        {post.title}
                                    </h2>
                                    <div className="postUser">
                                        by {post.user?.first_name}
                                    </div>
                                    <div className="postCategory">
                                        Category: {post.category?.label}
                                    </div>
                                    <div className="postDate">
                                        {post.publicationDate}
                                    </div>
                                    <div className="postContent">
                                        {post.content}
                                    </div>
                                    <button><Link to={''}>Edit</Link></button>
                                    <button onClick={() => {

                                    }}>Delete</button>
                                </div>
                            </li>
                    }
                )}
            </ul>
        </>
    )

}