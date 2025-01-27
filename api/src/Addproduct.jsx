import React, { useState } from "react";
// import axios from "axios";
import API from "../config/api";
import Product from "./product";
import './index.css'
import axios from "axios";
const AddProduct = ({changedata={}}) => {
  console.log(changedata);

  const [product, setProduct] = useState({
    name:changedata.name?changedata.name: "",
    price:changedata.price?changedata.price:"",
    description:changedata.description?changedata.description:"",
    category:changedata.category?changedata.category: "",
    image:changedata.image?changedata.image:"",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
try {
  if(changedata?._id){
    await API.patch(`/updateProduct/${changedata._id}`, product );
  }else{
    const response = await API.post("/createProduct",product);
    setProduct({ name: "", price: "", description: "", category: "" });
  }   
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
        <button type="submit" >{changedata._id? "Update Product" : "Add Product"} </button>
      </form>
    </div>
  ); 
};
export default AddProduct;
