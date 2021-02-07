import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
  
import { PrivateRoute } from './PrivateRoute';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
        <div>
          <Switch>

            {/* PublicRoute remplaza al componente Route de react-router-dom para ahcer publica esta ruta con el Componente creado */}
            <PublicRoute 
                exact path="/login" 
                component={ LoginScreen } 
                isAuthenticated = { user.logged } 
            />
            {/* PrivateRoute remplaza al componente Route de react-router-dom para ahcer Privada esta ruta con el Componente creado */}
            <PrivateRoute  
                path="/" 
                component={ DashboardRoutes }
                isAuthenticated = { user.logged } 
            />

          </Switch>
        </div>
      </Router>
    )
}
