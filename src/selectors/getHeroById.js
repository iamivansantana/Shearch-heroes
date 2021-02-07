//Se importa la data heroes.
import { heroes } from "../data/heroes";

//El metodo recibe el id qeu se utilizara para la busqueda
export const getHeroById = ( id ) => {

    //Retorna un el heroe encontrado.
    return heroes.find( hero => hero.id === id );

}