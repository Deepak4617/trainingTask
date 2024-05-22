import { createSlice } from "@reduxjs/toolkit";
import practice from "../../api/practice";

const practiceslice = createSlice({
    name:'practice',
    initialState:{
        pending:false,
        data:[],
        error:null
    },

    extraReducers :(builder)=>{
        builder.addCase(practice.pending.type,(state,action)=>{
            return {...state, pending:false, data:[] , error:null}
        })
        builder.addCase(practice.fulfilled.type,(state,action)=>{
            return {...state, data:action.payload, error:null} 
        })
        builder.addCase(practice.rejected.type,(state,action)=>{
            return {...state , data:[] , error:action.payload}
        })
    }
})
export default practiceslice.reducer;
