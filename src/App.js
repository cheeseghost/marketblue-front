import './App.css';
import React,{Fragment}  from 'react';
import Login from './pages/login';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Register from './pages/register';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import Carrito from './pages/carrito';
import Perfil from './pages/perfil';
import Mirar from './pages/mirar';
import Editar from "./pages/editar"
import Subir from "./pages/subir"

import PrivateRoute from"./components/PrivateRoute";
import Routee from "./components/Routee";


const App=()=>{
  
  return (
    
    <div>
        <Router>
        <Fragment>
          <Routes>
          <Route path='/' element={<Routee/>}>
          <Route path='/' element={<Login/>} />
           <Route path='/register' element={<Register/>} />
            </Route>

            <Route path='/' element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>} />
            <Route path='/carrito' element={<Carrito/>} />
            <Route path='/perfil' element={<Perfil/>} />
            <Route path='/editar' element={<Mirar/>} />
            <Route path='/mirar' element={<Editar/>} />
            <Route path='/subir' element={<Subir/>} />
            </Route>

          </Routes>
          </Fragment>
          </Router>
    </div>
  
  );
};

export default App;