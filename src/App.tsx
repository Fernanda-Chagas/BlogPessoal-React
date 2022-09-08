import React from 'react';
import Navbar from './Components/estaticos/navbar/Navbar';
import Footer from './Components/estaticos/footer/Footer';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Footer/>
    </>
  );
}

export default App;
