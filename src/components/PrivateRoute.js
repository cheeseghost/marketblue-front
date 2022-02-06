import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Redirect, Route,Routes } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => {  
  var auth=localStorage.getItem('token');

  return auth ? <Outlet /> : <Navigate to="/" />;
};


export default PrivateRoutes;