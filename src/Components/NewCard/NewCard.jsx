const NewCard = (addCard) => {

    // const [addCard, setAddCard] => useState("")

    function handleSubmit(event){
        event.preventDefault()
    }
    return ( 
        <form onSubmit={handleSubmit}>
        <button type="submit">Add New Card</button>
        </form>
     );
}
 
export default NewCard;