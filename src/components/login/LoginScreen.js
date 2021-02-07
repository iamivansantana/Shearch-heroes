import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {


    //Se asigna el valor de la ultima ruta en la que se navego y que esta guardada en localStorage.
    const lastPath = localStorage.getItem('lastPath') || '/';

    //Accede al Context de Auth 
    const {user,dispatch} = useContext(AuthContext);

    //Metodo que se activa al hacer clic en el boton Login
    const handleLogin = ()=>{
        // history.push('/'); <-esta linea agrega un nuevo path al historial de navegacion
        // history.replace('/'); <-esta linea remplaza el path en el historial de navegacion
        
        //Dispatch para ejecutar action del Reducer
        dispatch({
            type: types.login,
            payload: {
                name: 'Ivan Santana'
            }
        })
        
        //Al hacer login se remplaza la ruta por la ultima ruta navegada que esta guardada en localStorage en caso de no existir la ruta es "/"
        history.replace(lastPath);

    }

    return (
        <div className="containter mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login 
            </button>
        </div>
    )
}
