import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import useTitle from './useTitle'
function App() {
  const [count,setcount]=useState(0)
  useTitle(count)
  return (
    <div className="App">
      <h1>custome hooks</h1><br></br>
      <h2>count: {count}</h2>
      <button onClick={()=>setcount(count+1)}>clicks</button>
    </div>
  );
  
}

export default App;
