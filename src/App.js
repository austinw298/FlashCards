import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
// import Header from './Components/Header/Header';



function App() {

  const[entries, setEntries] = useState([]);

  async function makeGetRequest(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/collections/')
      console.log('response.data', response.data)
      setEntries(response.data)
    }
    catch(err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    makeGetRequest();
  }, [])


  return (
    <div>
      <div>
        <Card props = {entries}/>
      </div>
    </div>
  );
}

export default App;
