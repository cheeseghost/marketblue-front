import React,{useState,useEffect} from 'react';
import Navbar from "../components/navbar";
const Home=()=>{
const [image,setImage]=useState([]);
useEffect(() => {
 fetch('http://localhost:3001/image/get')
 .then(res=>res.json())
 .then(res=>setImage(res))
 .catch(err=>{
     console.log(err)
 })
}, [])
    return(    
    <div>
        <br/>
        <Navbar/>
        <div className="container">
            {image.map(imagen=>(
            <div key={imagen} className="card">
        <img src={'http://localhost:3001/'+imagen} className="card-img-top" style={{height:"200px",width:"300px"}}/>
            </div> ))}
            
        </div>
        </div>

    )

};
export default Home;