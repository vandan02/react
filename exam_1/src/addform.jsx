    import React, { useState } from 'react';
    import './App.css'
    import Timer from './timer';
import Showdata from './Showdata';
    const Addform = () => {
    const [data, setData] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const img= e.target.elements.url.value;
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;
        setData([...data, { title, content ,img}]);
        
    };

    return (
        <div >
        <form onSubmit={onSubmit}>
            <input type="url" name='url'/>
            <input type="text" name="title" placeholder="Title" required />
            <input type="text" name="content" placeholder="productname" required />
        
            <button type="submit">Add</button>
            
        </form>
        {data.length > 0 && <Timer initialHours={0} initialMinutes={29} initialSeconds={59} />}

    

       <div id='hello' >
            {data.map((item, index) => (
        
            <div key={index}   >
                <div >
                 <img src={item.img} alt={item.title} />
                 
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                </div>
            </div>
            
            ))}
      
        </div>
        </div>

    );
    };


    export default Addform;
