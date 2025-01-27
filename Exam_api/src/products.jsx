import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);

  const getproducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/product');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const handledelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/product/${id}`);
      getproducts(); 
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <div>
      {data.map((ele) => (
        <div key={ele.i}>
          <img src={ele.image} alt={ele.name} />
          <h1>{ele.name}</h1>
          <button onClick={() => handledelete(ele.i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Products;
