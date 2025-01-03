import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [sec,setsec]=useState(0)
    let [min,setmin]=useState(0)
    let [hour,sethour]=useState(0)
    let [flag,setflag]=useState(false)
    let [time,settime]=useState(0)
    let id;

    useEffect(() => {
       id=setInterval(() => {
        if(time>0){
         if(flag){
            setsec(sec-1)
         }
         if(sec===0){
            setsec(59)
            setmin(min-1)
         }
        
         if(min==0 ){
            setmin(59)
            sethour(hour-1)
         }
        //  if (hour > 0) {
        //     setsec(59);
        //     setmin(59);
        //     sethour(hour - 1);
      
        // }
        }
       },1000); 
       return () => clearInterval(id);
        
    }, [sec,flag]);

  
    const divide = () => {
      let newTime = time / 60;
     if(Math.floor(newTime)%2==0){
       sethour(Math.floor(newTime)-1);
       setmin(59);
       setsec(59);
       setflag(true);
    
     }
     else{
       sethour(Math.floor(newTime));
      setmin(time - Math.floor(newTime) * 60 - 1);
      setsec(59);
      setflag(true);
     }
    };
    const reset=()=>{
        setsec(0)
        setmin(0)
        sethour(0)
        settime(0)
        setflag(false)
    }
  return (
    <div>
    <h1>{hour}:{min}:{sec}</h1>
      <input type="number" onChange={(e) => settime(e.target.value)} />
      <button onClick={divide}>start</button>
      <button onClick={()=>setflag(false)}>stop</button>
      <button onClick={()=>setflag(true)}>resume</button>
      <button onClick={reset}>reset</button>

    </div>
  )
}

export default Timer
