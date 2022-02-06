import React from "react";
import Axios from 'axios';
import { NavLink } from "react-router-dom";
import {useState} from 'react';
import logo from "../img/logo.png";
import user from "../img/user.png";
import lock from "../img/lock.png";
import home from "../img/home.png";
import "../styles/register.css";

const Register = () => {
const[email,setEmail]=useState("");
const[pass,setPass]=useState("");
const[direccion,setDir]=useState("");

const enviar=()=>{
    Axios.post("http://localhost:3001/register",{
      email:email,
      pass:pass,
      direccion:direccion,
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
     <input placeholder="correo electronico"type="text" onChange={(event)=>{setEmail(event.target.value)}}/>
     </div>
     <div className="barra">
     <img src={lock} className="Lock" />
     <input placeholder="contraseña" type="password" onChange={(event)=>{setPass(event.target.value)}}/>
     </div>
     <div className="barra">
     <img src={lock} className="Lock"/>
     <input placeholder="contraseña" type="password"/>
     </div>
     <div className="barra">
     <img src={home} className="Home"/>
     <input placeholder="direccion" type="text"onChange={(event)=>{setDir(event.target.value)}}/>
     </div>
     <button className="boton   btn-block" onClick={enviar}>Crear cuenta</button>
     <NavLink className="link" to="/">Ya tienes una cuenta?</NavLink>
     </div>
     </div>
  );
};

export default Register;