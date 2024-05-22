import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, pending: true };
    case 'FETCH_SUCCESS':
      return { ...state, pending: false, data: action.payload, error: [] };
    case 'FETCH_ERROR':
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};

// Define your initial state
const initialState = {
  pending: false,
  data: [],
  error: [],
};

const MyComponent = () => {
  // Use useReducer with your reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data function
  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      // Replace the URL with your actual image API endpoint
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data;
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {state.pending && <p>Loading...</p>}
      {state.error.length > 0 && <p>Error: {state.error}</p>}
      {state.data.length > 0 && (
        <div>
          {state.data.map(item => (
            <img key={item.id} src={item.thumbnail} alt='...' style={{ width: '200px', height: '200px', margin: '10px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
