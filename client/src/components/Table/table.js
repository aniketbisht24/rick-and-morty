import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';

const Table = () => {
  const [search, setSearch]=useState('')
  const [data, setData] = useState([])

  const handleChange = (e) =>{
    e.preventDefault();
    setSearch(e.target.value)
  }
  
  const getData = async() =>{
    try{
      const response = await axios({
        method: 'get',
        url: 'https://rickandmortyapi.com/api/character',
        params: {name: search}
      })
      setData(response.data.results)
    }catch(err){
      setData([])
    }
  }

  useEffect(() => {
    getData();
  }, [search])
  
  // console.log(data);
  return (
    <div>
      <div className="search-box">
        <input type="text" onChange={handleChange}/>
      </div>

      {
        data.length ? data.map((element) => 
        {
          return (
            <div className="tableRow" key={element.id}>
              {element.name}
              {element.status}
              {element.species}
              {element.gender}
              <img src={element.image} alt="cartoons"/>
            </div>
          )
        }
        ) : <span></span>
      }
      <div className="table-box">

      </div>
    </div>
  )
}

export default Table