import axios from 'axios'
import { useEffect, useState } from 'react'

const FetchAxiosApi=()=>{
  const {isError,setIsError} = useState('');
  const {data,setData} = useState([]);
  
  
  
  useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> setData(res.data) )
    .catch((error)=> setIsError(error.message))
    
  },[])
  
  
  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {data?.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchAxiosApi;