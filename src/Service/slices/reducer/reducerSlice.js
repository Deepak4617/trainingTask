import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../../api/fetchProducts";

const reducerSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        products: [],
        isError: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
           return {...state, isLoading:true , isError:null , products:[]}
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {

           return {...state, isLoading:false, products:action.payload , isError:null}
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
          return {...state, isError:action.error ,isLoading:false , products:[]}
        });
    }

})
export default reducerSlice.reducer