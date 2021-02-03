//npm install query-string () <- para separar resultado del useLocation()

import React, { useMemo } from 'react';
import queryString from 'query-string';


import { HeroCard } from '../heroes/HeroCard';
import {useForm} from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    //Obtenie la busqueda del path
   const location = useLocation();
    //utiliza queryString para obtener el string de la busqueda (location.search)
   const { q = '' } = queryString.parse(location.search);
   console.log(q);



   //Utiliza el customHook useForm para el formulario de busqueda.
   //El initialState es q (el string de la busqueda por el path)
   const [ formValues, handleInputChange ] = useForm( {
       searchText: q
    } );
    
    //Desestructuramos el valor de searchText del CustomHook
    const { searchText }= formValues;
    
    //Pasa ak metodo getHeroesByName() el texto de la busqueda (q) 
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
     

    //handleSearch submit del formulario
    const handleSearch = (e)=>{
        e.preventDefault();
        //utiliza el history.push para agregar al path el texto escrito en el Formulario
        history.push(`?q=${ searchText }`);
 
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div> 
                    }
                    {
                        (q !=='' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with: {q}
                        </div> 
                    }


                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard 
                                key={ hero.id }
                                {...hero} 
                            />
                        ))
                    }
                    

                </div>
            </div>
        </div>
    )
}
