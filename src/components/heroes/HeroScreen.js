import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

//se utiliza el hook useParams() para obtener/acceder a los parametros del path
//se desestructura heroeId
   const {heroeId} = useParams();

   //se utiliza el metodo getHeroById() mandando el heroeId y que retorna el listado de los heroes que coinciden con el id mandado.
   //se utiliza el hook useMemo para guardar el resultado del listado de los heroes que retorna el metodo getHeroById() y que solo cambia con el [heroeId]
   const hero = useMemo(() => getHeroById(heroeId), [heroeId]);


   //si el hero no existe o retorna false se redirecciona al path '/'
   if(!hero) return <Redirect to="/" />

   //se desestructuran las propiedades deseadas de hero.
   const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
   } = hero;

   //metodo que se ejecuta al hacer clic en el boton return.
   const handleReturn = ()=>{
       
    //condiciona si el historial de navegacion es menor igual a 2 hal hacer clic te agrega al path '/'.
       if (history.length <= 2) {
           history.push('/');
       }else{
            //Si el tamaño del historial es mayor te lleva a la pagina anterior.
            history.goBack();
       }
   }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> { alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b> { publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b> { first_appearance }</li>
                </ul> 
                <h5>Characters</h5>
                <p>{ characters }</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
