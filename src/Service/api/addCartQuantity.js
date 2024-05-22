import { createAsyncThunk } from "@reduxjs/toolkit";

export const addQuantity = createAsyncThunk('addQuantity', async(result)=>{    
    try {
        const response = await result;

        return response ;

    } catch (error) {
        console.log(error)
        
    }
})