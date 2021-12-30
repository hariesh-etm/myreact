import React, {Fragment} from 'react';
import './css/App.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/fullcalendar.css';
import './css/lineicons.css';
import './css/loading-bar.min.css';
import './css/materialdesignicons.min.css';
import './css/morris.css';

import Navbar from './layout/navbar';
import Headerpart from './layout/header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './layout/landing';




function App() {
  return (
    <BrowserRouter>
    <Fragment>   
       
      <Navbar/>
    <Headerpart/> 
    <Routes>      
    <Route exact path = '/' element = {<Landing/>}/>   
    </Routes> 
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
