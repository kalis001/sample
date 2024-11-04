import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name:'count',
    initialState:{
        value:10
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        reset:(state)=>{

            state.value = 0
        }
    }
})

export const {increment,decrement,reset} = counterslice.actions;

export default counterslice.reducer;
