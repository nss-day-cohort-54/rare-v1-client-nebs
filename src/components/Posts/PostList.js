//purpose is to produce a html list for all posts
import React, {useEffect, useState} from "react"
import { get_all_posts } from "./PostsManager"

export const PostList = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        get_all_posts()
        .then(
            (response) => {
                setPosts(response)
            }
        )
    },[]
    )


    return (
        <>
        <ul className="postList">
            {posts.map((post) => {
                return <li key={`${post.id}`}>{post.publication_date}</li>
            })}
        </ul>
        
        </>
    )

}
