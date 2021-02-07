import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

//HeroList recibe por props publisher que es un string con el nombre del publicante
export const HeroList = ({ publisher }) => {

    //se manda el publisher al metodo getHeroesByPublisher y retorna un filtrado de los heroes que cumplen esa condicion
    //se utiliza el hook useMemo para memorizar el resultado del filtrado y ejecutarse cuando hay cambio en [publisher]
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                //mapeo con los heroes que nos retorno el metodo getHeroesByPublisher
                heroes.map(hero =>(
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                   />
                ))
            }
        </div>
    )
}
