import { host } from "../Settings"

export const getAllTags = () => {
    return fetch(`${host}/tags`)
    .then(res => res.json())
}

export const getSingleTag = (tagId) => {
    return fetch(`${host}/tags/${tagId}`)
    .then(res => res.json())
}

