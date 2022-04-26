import React, { useEffect, useState } from "react";
import { getAllTags, addTag, updateTag, addNewTag, deleteTag } from "./TagManager";
import { useHistory } from "react-router-dom";
import { TagForm } from "./TagForm";


export const TagList = () => {
    const [tags, setTags] = useState([])
    const [tag, setTag] = useState({})
    const history = useHistory()
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        getAllTags()
            .then((tag) => setTags(tag))
    }, [refresh])

    const handleChange = (event) => {
        const newTag = Object.assign({}, tag)

        newTag[event.target.name] = event.target.value 

        setTag(newTag)

        
    }

    const onSubmitClick = () => {
        if("id" in tag){
            updateTag(tag)
            console.log("existing")
            setTag({})
        }
        else{
            addNewTag(tag)
            console.log(tag)
            setTag({})
        }

        

    }

    const onDeleteClick = (tag_id) => {
        deleteTag(tag_id)
        .then(setTag({}))
        .then(
            () => {
                setRefresh(!refresh)
            }
        )
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
                        <button className="btn delete-tag"
                        onClick={
                            (evt) => {
                                onDeleteClick(tag.id)
                            }
                        }>Delete</button>
                    </div>

                }
                )}

        </div>

        <div className="tagForm">
            
            <TagForm tag = {tag} setTag = {setTag} onSubmitClick={onSubmitClick} handleChange = {handleChange} setRefresh = {setRefresh} refresh = {refresh}/>
        </div>


           
        </>
    )
}