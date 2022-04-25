import React, { useEffect, useState } from "react";
import { getAllTags, addTag, updateTag, addNewTag } from "./TagManager";
import { useHistory } from "react-router-dom";
import { TagForm } from "./TagForm";


export const TagList = () => {
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState({})
    const history = useHistory()

    useEffect(() => {
        getAllTags()
            .then((tag) => setTags(tag))
    }, [])

    const handleChange = (evt) => {
        new_tag = Object.assign({}, tag)

        new_tag[evt.target.name] = evt.target.value 

        setTag(new_tag)

        print(new_tag)
        
    }

    const onSubmitClick = (tagInfo) => {
        if("id" in tagInfo){
            updateTag(tagInfo)
        }
        else{
            addNewTag(tagInfo)
        }

    }



    return (
        <>
        <div className="tagList">
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

        </div>

        <div className="tagForm">
            <div>
                <label htmlFor="label">Enter Label Name</label>
                <input
                className="labelInput"
                type="text"
                name="label"
                onChange={
                    () => {
                        handleChange
                    }
                }
                />

            </div>


            <TagForm tag = {tag} setTag = {setTag} onSubmitClick = {onSubmitClick}/>
        </div>
           
        </>
    )
}