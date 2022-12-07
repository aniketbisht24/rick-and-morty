import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css';

const Table = () => {
  const [search, setSearch]=useState('')
  const [data, setData] = useState([])

  
  useEffect(() => {
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
    getData();
  }, [search])
  
  return (
    <div>
      <div className="search-box">
        <label> Search your Favorite Character here </label>
        <input type="text" placeholder='Enter data to be searched' onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="table-box">
        {
          data.length ? data.map((element) => 
          {
            return (
              <div className="tableRow" key={element.id}>
                <div className="element-image">
                  <img src={element.image} alt="cartoons"/>
                </div>

                <div className="right-alignment">
                  <div className="element-name">
                    {element.name}
                  </div>
                  
                  <div className="element-status">
                        {element.status} - {element.species}
                  </div>

                  <div className="element-gender">
                    Gender: {element.gender}
                  </div>
                </div>
              </div>
            )
          }
          ) :               <div className="tableEmpty">
              No element found
            </div>
        }
      </div>
    </div>
  )
}

export default Table