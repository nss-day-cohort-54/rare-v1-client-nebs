
import { useHistory } from "react-router-dom"
import { host } from "../Settings"


export const get_all_categories = () => {
    return fetch(`${host}/categories`)
    .then(res => res.json())
}

export const delete_category = (id) => {
    
    return fetch(`${host}/categories/${id}`, {method: "DELETE"})
}


export const update_category = (categoryObject) => {
    const fetchOptions = 
        {method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoryObject)
        }
    return fetch(`${host}/categories/${categoryObject.id}`, fetchOptions)
}
