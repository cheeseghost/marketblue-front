import React, { useState } from 'react';
import Navbar from "../components/navbar";
import Axios from 'axios';
const Subir=()=>{
const [file,setFile]=useState(null);
const [nom,setNom]=useState("");
const [pre,setPre]=useState();
const [des,setDes]=useState("");
const Select=(e)=>{
    nom:nom;
    pre:pre;
    des:des;
    setFile(e.target.files[0],nom,pre,des);
 
}
const Send=()=>{
    if(!file){
        alert("no hay imagen");
        return
    }

const formdata=new FormData();
formdata.append("image",file);
formdata.set('nom',nom);
formdata.set('pre',pre);
formdata.set('des',des);
fetch('http://localhost:3001/image/post',{
    method:'POST',
    body:formdata,
  
}).then(res=>res.text())
.then(res=>console.log(res))
.catch(err=>{
    console.error(err)
})
document.getElementById("fileIn").value=null
setFile(null)
setNom(null)
setPre(null)
setDes(null)
}

    return(
        <div>
            <Navbar/>
<div>
    <div>
        <input id="fileIn" type="file" onChange={Select}></input>
        <input placeholder="nombre del producto"onChange={(event)=>{setNom(event.target.value)}}></input>
        <input placeholder="precio" onChange={(event)=>{setPre(event.target.value)}}></input>
        <input placeholder="descripcion" onChange={(event)=>{setDes(event.target.value)}}></input>

    </div>
    <div>
        <button onClick={Send}>Guardar producto</button>
    </div>
    
</div>
        </div>
    )
}
export default Subir;