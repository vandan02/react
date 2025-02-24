"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {
  const [products, setProducts] = useState([]);

  const getdata=async()=>{
    let res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
  }

  useEffect(() => {
    getdata();
 
  }, []);
  return (
    <div>
      {products.map(product=>(
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="200" />
          <p>{product.description}</p>
          <p>Price: {product.price} USD</p>
        </div>
      ))}
    </div>
   
  )
}

export default page

