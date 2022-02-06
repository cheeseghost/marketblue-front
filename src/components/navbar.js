import React,{useState} from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import Drop from "./drop";
import cart from "../img/cart.png";
import logo from "../img/logo.png";
import sett from "../img/setting.png";
const Navbar=()=>{
  
const Cerrar=()=>{
  localStorage.removeItem("token");
}

    return(
<div className="cont">
<div className="cuadrito">
<button className="but   btn-block" ><NavLink className="linkbut" to="/home"><img src={logo} className="logito"/></NavLink></button>

      <div className="busqueda">
        <input  className="aa" type="search" />
  
      </div>
      <button className="butt   btn-block" ><NavLink className="linkbut" to="/carrito"><img src={cart} className="cart"/></NavLink></button>

      <button className="butt   btn-block" ><NavLink className="linkbut" to="/perfil"><img src={sett} className="sett"/></NavLink></button>
      <button className="boto btn-block" onClick={Cerrar}><NavLink className="linkbut" to="/">Cerrar sesion</NavLink></button>

</div>

</div>
    )

};

export default Navbar;