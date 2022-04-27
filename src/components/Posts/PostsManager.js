//Purpose of this component is to hold all fetch calls related to posts

import { host } from "../Settings"

export const get_all_posts = () => {
    return fetch(`${host}/posts`)
    .then(res => res.json())
}

export const get_single_post = (postId) => {
    return fetch(`${host}/posts/${postId}`)
    .then(res => res.json())
}

export const getUserPost = (userId) => {
    return fetch(`${host}/posts?user=${userId}`)
    .then(res => res.json())
}

export const editPost = (newPost, postId) => {
    return fetch(`${host}/posts/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
}