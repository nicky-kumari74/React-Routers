import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
function App() {
  const [count,setcount]=useState(10)
  const [data,setdata]=useState(1)
  useEffect(()=>{
    alert("effect count")
  },[count])
  useEffect(()=>{
    alert("effect data")
  },[data])
  return (
    <div className="App">
      <h1>count {count}</h1>
      <h1>data {data}</h1>
      <button onClick={()=>setcount(count+1)}>update count</button>
      <button onClick={()=>setdata(data+1)}>update data</button>
    </div>
  );
  
}

export default App;
