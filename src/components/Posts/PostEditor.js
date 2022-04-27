import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get_all_categories } from "../Categories/CategoryManager";
import { editPost, get_single_post } from "./PostsManager";


export const PostEdit = () => {
    const [categories, setCategories] = useState([])
    const [post, setPost] = useState({})
    const [newPost, setNewPost] = useState({})
    const { postId } = useParams()
    const history = useHistory()



    const submitPost = (post) => {
        editPost(newPost, post.id)
        .then(() => history.push("/my-posts"))

    }

    useEffect(() => {
        const copy = {}
        copy.user_id = post.user_id
        copy.category_id = post.category_id
        copy.title = post.title
        copy.publication_date = post.publication_date
        copy.image_url = post.image_url
        copy.content = post.content
        copy.approved = post.approved
        setNewPost(copy)
    },[post])

    useEffect(() => {
        get_all_categories()
            .then((data) => setCategories(data) )
    }, [])

    useEffect(() => {
        get_single_post(postId)
            .then((data) => setPost(data))
    }, [postId])



    return (
        <>
            <div className="card post--list" key={`post--${post.id}`}>
                <div key={`post--${post.id}`}>
                    <div>Title:<br></br></div>
                    <input type="text" defaultValue={post.title} className="post--title" onChange={e => {
                        const copy = { ...newPost }
                        copy.title = e.target.value
                        setNewPost(copy)
                    }} />
                    <div>Category: <br></br></div>
                    <select className="post--category" defaultValue={post.category_id} onChange={e => {
                        const copy = { ...newPost }
                        copy.category_id = parseInt(e.target.value)
                        
                        setNewPost(copy)
                    }}>
                        
                        {categories.map(category => {
                            return <option key={`category--${category.id}`} value={category.id}>{category.label}</option>
                        })}
                    </select>
                    <div>Image URL: <br></br></div>
                    <textarea className="post--image" defaultValue={post.image_url} onChange={e => {
                        const copy = { ...newPost }
                        copy.image_url = e.target.value
                        setNewPost(copy)
                    }}
                    />
                    <div>Content: <br></br></div>
                    <textarea className="post--content" defaultValue={post.content} onChange={e => {
                        const copy = { ...newPost }
                        copy.content = e.target.value
                        setNewPost(copy)
                    }}
                    /><br></br>
                    <button onClick={e => {
                        submitPost(post)
                    }}>Submit Changes</button>
                </div>
            </div>
        </>
    )
}