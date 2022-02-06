
import React, { useEffect } from 'react';
import { NavLink,link } from "react-router-dom";
import Axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import {useState} from 'react';
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/logo.png";
import user from "../img/user.png";
import lock from "../img/lock.png";

const Login=()=>{
const[email,setEmail]=useState("");
const[pass,setPass]=useState("");
const[conect,SetConect]=useState(false);

Axios.defaults.withCredentials=true;
const iniciar=()=>{
  
    Axios.post("http://localhost:3001/login",{
      email:email,
      pass:pass,
    }).then((Response)=>{
      if(!Response.data.auth){
        SetConect(false); 
      }else{
        localStorage.setItem("token",Response.data.token);
        SetConect(true);
      }
    });
 
   };
const authentic=()=>{
  Axios.get("http://localhost:3001/verify",{
    headers:{
      "x-access-token":localStorage.getItem("token"),
    }
  }).then((Response)=>{
    console.log(Response);
  })
};

    return (
      <div className="cuadro">
    <div className="form">
    <img src={logo} className="Logo"/>
    <div className="barra">
    <img src={user} className="User"/>
     <input placeholder="correo electronico" className="inp" type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
     </div>
     <div  className="barra">
     <img src={lock} className="Lock" />
     <input placeholder="contraseña" type="password" onChange={(event)=>{setPass(event.target.value)}}/>
     </div>
     <button className="boton   btn-block" onClick={iniciar}><NavLink className="linkbut" to="/home">Iniciar</NavLink></button>
     
     <NavLink className="link" to="/register">Crear cuenta</NavLink>
     </div>

     </div>
     
      );
};

export default Login;