import { createAsyncThunk } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const cardData = createAsyncThunk('cardData',async(data)=>{

    try {
        const response = await data;
        // console.log('resp',response)
        return response ;
        
    } catch (error) {
        console.log(error)
        
    }
})