import React, { useState } from 'react';
import './App.css'
const Addform = () => {
  const [data, setData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;
    setData([...data, { title, content }]);
    
  };

  return (
    <div >
      <form onSubmit={onSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="content" placeholder="Content" required />
        <button type="submit">Add</button>
      </form>

   

      

      <ul>
        {data.map((item, index) => (
      
          <div key={index} id='hello'   >
            <div >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            </div>
          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default Addform;
