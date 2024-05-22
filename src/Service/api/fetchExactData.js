import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExactProduct = createAsyncThunk('fetchExactProduct', async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        const data = response.data;
        return data;

    } catch (error) {
        return rejectWithValue(error.response);
    }
});