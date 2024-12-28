import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Pages404 from './component/Pages404';
import User from './component/User';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';

function App() {
  
  return(
    <div className='App'>
      <BrowserRouter>
      <ul className="nic">
        <li><NavLink to="/about" className="nave-link">About</NavLink></li>
        <li><NavLink to="/" className="nave-link">Home</NavLink></li>
        <li><NavLink to="/contact" className="nave-link">Contact</NavLink></li>
      </ul>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact/" element={<Contact/>} >
            <Route path="company" element={<Company/>}/>
            <Route path="channel" element={<Channel/>}/>
        </Route>
        <Route path="/*" element={<Pages404/>} />
        {/*<Route path="/*" element={<Navigate to="/" />} />*/}
        <Route path="/user/:name" element={<User/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
