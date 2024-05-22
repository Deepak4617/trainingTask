import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchExactProduct } from "../../api/fetchExactData";

const productSlice = createSlice({
    name: 'exactMatch',
    initialState: {
        isLoading: false,
        data: [],
        isError: null

    },
    extraReducers: (builder) => {
        builder.addCase(fetchExactProduct.pending.type, (state) => {
            return { ...state, isLoading: true, isError: null, data: [] }
        });
        builder.addCase(fetchExactProduct.fulfilled.type, (state, action) => {
            // console.log('product',state)
            return { ...state, isError: null, data: action.payload , isLoading:false}
        });
        builder.addCase(fetchExactProduct.rejected.type, (state, action) => {
            return { ...state, isError: action.payload, data: [] ,isLoading:false}
        });
    }

})
export default productSlice.reducer