//Purpose of this component is to hold all fetch calls related to posts

const host = "http://localhost:8088/"

export const get_all_posts = () => {
    return fetch(`${host}posts`)
    .then(res => res.json())
}

export const get_single_post = (postId) => {
    return fetch(`${host}posts/${postId}`)
    .then(res => res.json())
}