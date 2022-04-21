//Purpose of this component is to hold all fetch calls related to posts

const host = "http://localhost:8088/"

export const get_all_posts = (id) => {
    return fetch(`${host}posts`)
    .then(res => res.json())
}