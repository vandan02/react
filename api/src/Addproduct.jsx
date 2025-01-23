import React, { useState } from "react";
// import axios from "axios";
import API from "../config/api";
import Product from "./product";
import './index.css'
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image:'',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(product);
    
try {
     
        const response = await API.post("/createProduct",product);
        console.log("Product added successfully:", response.data);
  
        setProduct({ name: "", price: "", description: "", category: "" });
} catch (error) {
  console.log(error.message);
  
}
  
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Product category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />
          <input
          type="text"
          placeholder="Product image"
          value={product.img}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>
      
      <Product/>
      
    </div>
  );

 
};



export default AddProduct;
