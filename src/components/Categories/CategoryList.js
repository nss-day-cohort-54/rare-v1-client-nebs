//purspose is to produce a list of all categories

import { useEffect, useState } from "react"
import { CategoryForm } from "./CategoryForm"
import { delete_category, get_all_categories, update_category } from "./CategoryManager"

export const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const [updater, setUpdater] = useState(false)


    useEffect(
        () => {
            get_all_categories()
                .then(
                    (response) => {
                        setCategories(response)
                    }
                )
        }, [updater]
    )



    return (
        <>
            <div>
                {categories.map(category => {
                    return <div className="category" key={`${category.id}`}>
                        <h5>{category.label}</h5>
                        <button

                            className="delete_btn"
                            onClick={
                                () => {
                                    delete_category(category.id)
                                        .then(
                                            () => {
                                                setUpdater(!updater)
                                            }
                                        )

                                }

                            }
                        >Delete
                        </button>

                        <button

                            className="edit_btn"
                            onClick={
                                () => {
                                    update_category(category)
                                    setUpdater(!updater)
                                }

                            }
                        >Edit
                        </button>
                    </div>
                })}
            </div>

            <div>
                <CategoryForm updater={updater} setUpdater={setUpdater} />

            </div>
        </>
    )
}
