import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk('fetchProducts', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        const data = response.data;
        
            return data;            
    } catch (error) {
        console.log(error)
        
    }
});