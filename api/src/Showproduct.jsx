import React from 'react'

const Showproduct = ({name,title,price,description,category,image,_id,onDelete}) => {
    const updateProduct = (product) =>{
        // Add your logic to update the product here
         

    }
  return (
    <div className='main' >
     <div>
      <img src={image} alt={name} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    <button onClick={()=> onDelete(_id)}>delete </button>
    </div> 
    </div>
  )
}

export default Showproduct
