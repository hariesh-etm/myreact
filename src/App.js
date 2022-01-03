import React, {Component, Fragment} from 'react';
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
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Landing from './layout/landing';
import Signin from './layout/signin';
import Signup from './layout/signup';


class App extends React.Component{
render()
{
  console.log("App rendering");
  return (
    <Router>
    <div className='App'>      
    <Headerpart/> 
      <Navbar/>   
      <div className='container'>
      <Routes>  
      <Route exact path ="/" element ={<Landing/>}/>
      <Route exact path ="/signin" element ={<Signin/>}/>
      <Route exact path ="/signup" element ={<Signup/>}/>
      </Routes>
      </div>     
      </div>   
      </Router>
  );}
}

export default App;
