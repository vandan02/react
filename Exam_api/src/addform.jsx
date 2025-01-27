import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Products from './products'
const Addform = () => {
const [data,setdata]=useState({
    title:'',
    content:'',
    img:''
})
const createProduct =async (data) =>[
    await axios.post('http://localhost:3000/product',data)
]
const handleChange=(e)=>{
   const {name,value} = e.target
   setdata({...data,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    createProduct(data) 
    setdata({
        title: "",
        content: "",
        img: "",
      });
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" name="title" value={data.title} onChange={handleChange} />
        <input type="text" placeholder="content" name="content" value={data.content} onChange={handleChange} />
        <input type="text" placeholder="img" name="img"  value={data.img} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <Products/>
    </div>
  )
}
export default Addform
