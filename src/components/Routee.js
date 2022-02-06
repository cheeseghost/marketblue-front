import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const Routee = ({ component: Component, ...rest }) => {  
  var auth=localStorage.getItem('token');

  return ! auth ? <Outlet /> : <Navigate to="/home" />;
};


export default Routee;