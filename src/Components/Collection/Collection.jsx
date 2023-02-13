



const Collection = ({collection}) => {
    function handleClick(){
        console.log(collection.title)
    }

   return <div onClick={handleClick}>{collection.title} </div>
}
 
export default Collection;