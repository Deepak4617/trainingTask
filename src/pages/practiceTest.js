import axios from "axios"
import { useCallback, useReducer, useState } from "react"



  // export const Fetch = async()=>{
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //     console.log(res)
      
  //   } catch (error) {
  //     console.log(error)
      
  //   }
  // }

export const Application = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { age: state.age + 1 }
      case 'decrement':
        return { age: state.age - 1 }
    }
  }
  const initialState = { age: 0 }
  const [state, dispatch] = useReducer(reducer, initialState);

  const inrementAge = () => {
    dispatch({ type: 'increment' })
  }
  const decrementAge = () =>{
    if (state.age>0)   {
      dispatch({ type: 'decrement' })  
    }
  }
  return (
    <>
      <div className="container" >
        <div className="col-sm-6">
          <div className="mb-3">
            <button type="submit" className="btn btn-secondary" onClick={inrementAge} >Incre</button>
          </div>
        </div>
        <p>{state.age}</p>
        <div className="col-sm-6">
          <div className="mb-3">
            <button type="submit" className="btn btn-secondary" onClick={decrementAge} >decre</button>
          </div>
        </div>
      </div>
    </>
  )
}