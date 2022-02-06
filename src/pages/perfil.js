
import React from 'react';
import { NavLink,link } from "react-router-dom";
import "../styles/perfil.css";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
const Perfil=()=>{

    
    return(
     <div>
         <br/>
         <Navbar/>
         <br/>
         <div className="cent">
         <div className="barrita">
             Tus productos en ventas
         </div>
         

         </div>
         <div>
             aqui va los producto xD
         </div>
         <div className="hi" >
         <button className="fin   btn-block"><NavLink className="linkbut" to="/subir">Subir producto</NavLink></button>
         </div>
     </div>   
    )
}
export default Perfil;