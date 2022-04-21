//purpose to display, edit, or delete individual posts

import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { get_single_post } from "./PostsManager"

export const Post = () =>{
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(
        () => {
            get_single_post(postId)
            .then(
                (response) => {
                    setPost(response)
                }
            )
        },[postId]
    )


    return (
        <>
        <h1>{post.title}, {post.user.first_name}, {post.category.label}, {post.publication_date}, {post.content} </h1>
        
        
        </>
    )
}