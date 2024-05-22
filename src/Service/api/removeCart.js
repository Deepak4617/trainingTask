import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const removeToCart = createAsyncThunk('removeToCart',async(index)=>{

    try {
        const response = await index;
        return response ;
        
    } catch (error) {
        console.log(error)
        
    }
})