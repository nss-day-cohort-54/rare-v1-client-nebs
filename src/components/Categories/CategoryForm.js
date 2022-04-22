import { useState } from "react";
import { useHistory } from "react-router-dom";

// create a function for new category form
export const CategoryForm = () => {

    // initial state is an object, need to track transient state while user is interacting with form
    const [category, setCategory] = useState({
        label: ""
    });

    const history = useHistory()

    // create an add category event listener and add prevent default to stop screen from blinking
    const addCategory = (event) => {
        event.preventDefault()

        // create a new category object format
        const newCategory = {
            label: category.label
        }

        // add http post method 
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }

        // render the list of categories for the user to see once they submit a request
        return fetch("http://localhost:8088/categories", fetchOption)
            .then(() => {
                history.push("/categories")
            })
    }

    return (

        <form className="categoryForm">
            <h2 className="categoryFormTitle">New Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Add a New Category"
                        // this event listener listens to what is input and sends it to API
                        // evt = event is parameter
                        // can't directly modify state so you will use setter function from above (update)
                        // first, copy existing state
                        // change description to whatever has been typed (evt.target.value)
                        // invoke setter function with parameter of copy (which is the ticket)
                        onChange={
                            (evt) => {
                                const copy = { ...category }
                                copy.description = evt.target.value
                                setCategory(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button onClick={addCategory} className="addButton">
                Add Category
            </button>
        </form>


    )

}