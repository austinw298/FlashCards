import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Collection from './Components/Collection/Collection';
import Sidebar from './Components/Sidebar/Sidebar';
// import Header from './Components/Header/Header';



function App() {

  const[collections, setCollections] = useState([]);

  async function getAllCollections(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/collections/')
      
      setCollections(response.data)
    }
    catch(err) {
      console.log(err.message)
    }
  }
  
  
  useEffect(() => {
    getAllCollections();
  }, [])
  

  return (
    <div>
      <div>
        <Sidebar collections = {collections}/>
        
      </div>
    </div>
  );
}

export default App;
