


//this only adds the function of the name of the collection showing in the console
//find a way that will take the data and use it instead of just being printed
const Collection = ({collection}) => {

    function handleClick(selectedCollection){
        
        console.log(selectedCollection)
    }

   return <div onClick={()=>handleClick(collection)}>{collection.title} </div>
}
 
export default Collection;