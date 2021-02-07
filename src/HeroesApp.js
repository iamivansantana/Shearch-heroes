import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authreducer } from './auth/authReducer';
import { AppRouter } from './components/routers/AppRouter';

//init es utilizado por el useReducer como estado inicial.
const init = ()=>{
    //regresa el contenido almacenado del user en el localStorage y en caso de no existir retorna la "{ logged: false }"
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {

    //utilizacion del useReducer para extraer el contenido (user) y el dispatch y asignando el estado inicial
    const [user, dispatch] = useReducer(authreducer, {}, init);

    //efecto que cambia el contenido del user en localStorage cada vez que el user cambia
    useEffect(() => {
        localStorage.setItem('user',JSON.stringify(user));
    }, [user])


    return (
        //implementacion del Provider del AuthContext
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter /> 
        </AuthContext.Provider>
    )
}
