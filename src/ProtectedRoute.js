// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  // Assuming the authentication status is stored in local storage or a context
  // You need to adjust this according to your auth logic
  // const isAuthenticated = localStorage.getItem('isAuthenticated');
  const {isLoggedIn}=useAuth()
  return (
    // <Route {...rest}  />
    <Route {...rest} render={
        props => isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
      } />
  );
};

export default ProtectedRoute;
