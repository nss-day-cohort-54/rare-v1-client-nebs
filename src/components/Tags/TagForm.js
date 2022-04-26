

export const TagForm = ({tag, setTag, onSubmitClick, handleChange, setRefresh, refresh}) => {
    

    return (
    <>

        <label htmlFor="label">Enter Label Name</label>
        <input
        className="labelInput"
        type="text"
        name="label"
        id = "labelInput"
        onfocus="this.value=''"
        onChange={
            (evt) => {
                handleChange(evt)
                console.log(tag)
            }
        }
        />

        <button
        className="submitBtn"
        onClick={
            (evt) => {
                document.getElementById("labelInput").value = ""
                onSubmitClick(evt)
                setRefresh(!refresh)

                
            }
        }>
            Save Tag
        </button>

   
    </>
    )
}