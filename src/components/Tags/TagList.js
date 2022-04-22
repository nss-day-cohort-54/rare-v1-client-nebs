import React, { useEffect, useState } from "react";
import { getAllTags, addTag } from "./TagManager";
import { useHistory } from "react-router-dom";


export const TagList = () => {
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState({})
    const history = useHistory()

    useEffect(() => {
        getAllTags()
            .then((tag) => setTags(tag))
    }, [])




    return (
        <>
            {tags.map(tag => {
                return <div className="card tag--list" key={`${tag.id}`}>
                    <div className="tag--label">
                        {tag.label}
                    </div>
                    <button className="btn edit-tag">Edit</button>
                    <button className="btn delete-tag">Delete</button>
                </div>

            }
            )}
        </>
    )
}