
import { host } from "../Settings"


export const get_all_categories = () => {
    return fetch(`${host}/categories`)
    .then(res => res.json())
}

export const delete_category = (id) => {
    
    return fetch(`${host}/${id}`, {method: "DELETE"})
}