//purspose is to produce a list of all categories

import { useEffect, useState } from "react"
import { delete_category, get_all_categories } from "./CategoryManager"

export const CategoryManagement = () => {
    const [categories, setCategories] = useState([])
    // const [updater, setUpdater] = useState(False)


    useEffect(
        () => {
            get_all_categories()
            .then(
                (response) => {
                    setCategories(response)
                }
            )
        },[]
    )


    return (
        <>
   
        {categories.map(category => {
            return <div className="category" key={`${category.id}`}>
                    <h5>{category.label}</h5>
                    <button 
                    
                    className="delete_btn"
                    onClick={
                        () => {
                            delete_category(category.id)
                            // setUpdater(!updater)
                        }
                        
                    }
                    >Delete
                    </button>
                </div>
        })}

        </>
    )
}