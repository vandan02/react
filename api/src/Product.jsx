import React, { useState, useEffect } from 'react';
import API from '../config/api';
import Showproduct from './Showproduct';
import './index.css'

const Product = () => {
  const [data,setData] = useState([]);


  const getProduct = async () => {
          
    try {
          const res = await API.get('/getproducts'); 
           
          setData(res.data.data);

        
          
          
    } catch (error) {
        console.log(error);
        
    }
   
  };


  const deleteProduct = async (id) => {
 
      await API.delete(`/deleteProduct/${id}`);
      getProduct(); 
  
  };

 
  const updateProduct = async (id) => {
  
      await API.patch(`/updateProduct/${id}`);
      getProduct(); 
  
  };


  useEffect(() => {
    getProduct();
  }, [deleteProduct]);

  return (
    
    <div className='grid' >
                
      
      {data.map((ele,i) => (
       
        <Showproduct key={ele._id} {...ele} onDelete={deleteProduct} updateProduct={updateProduct} />  
       
      ))}
      
    </div>
  );
};

export default Product;


