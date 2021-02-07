//Se importa la data heroes.
import { heroes } from "../data/heroes"

//El metodo recibe el string del nombre a buscar.
export const getHeroesByName = ( name = '' ) => {

    if (name === '') {
        return [];
    }
    //el texto recibido se pasa a LowerCase
    name = name.toLocaleLowerCase();

    //Retorna el filtrado de los heroes que coinciden con la busqueda
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ));
    
}
