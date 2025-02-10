import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const {id}=useParams();
    let [product, setproduct] = useState({});
    const getProducts = async () => {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res.data);
      setproduct(res.data);
      // setProducts(res.data);
    };
    useEffect(() => {
      getProducts();
    }, []);
    return (
      <div>
         <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Price: {product.price} USD</p>
      </div>
    );
  };
  
  export default Details;