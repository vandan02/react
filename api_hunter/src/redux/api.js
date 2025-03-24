import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchApi=createAsyncThunk("product/get",async()=>{
    let res=await axios.get("https://fakestoreapi.com/products/")
    return res.data
})

