import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';



const App = () => {
  return (
    <div className='app'>
     <Navbar/>
     <Dashboard/>
    </div>
  );
};

export default App;