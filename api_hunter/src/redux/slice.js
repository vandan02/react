import { createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "./api"


const initialState ={
    products: [],  
    product: {},    
    isLoading: false, 
    isError: null, 
}

const productslice=createSlice({
    name: "products", 
    initialState:initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
       .addCase(fetchApi.pending, state => {
            state.isLoading = true;
       })
       .addCase(fetchApi.rejected,(state,action)=>{
        state.isLoading = false;
        state.isError=action.payload
        
       })
       .addCase(fetchApi.fulfilled,(state,action)=>{
        state.products=action.payload
        state.isLoading = false;
       })
  
    }
})

export const productReducer = productslice.reducer;