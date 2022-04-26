import { host } from "../Settings"

export const getAllTags = () => {
    return fetch(`${host}/tags`)
    .then(res => res.json())
}

export const getSingleTag = (tagId) => {
    return fetch(`${host}/tags/${tagId}`)
    .then(res => res.json())
}

export const addNewTag = (tagInfo) => {
    return fetch(`${host}/tags`, 
    {method: "POST",
    headers: {
        "Content-Type": "application/json"
    },body: JSON.stringify(tagInfo)
}
    
    )
}


export const updateTag = (tagInfo) => {
    return fetch(`${host}/tags/${tagInfo.id}`, 
    {method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },body: JSON.stringify(tagInfo)
    
})}

export const deleteTag = (tagId) => {
    return fetch(`${host}/tags/${tagId}`, 
    {method: "DELETE"})

}


