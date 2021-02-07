//Se importa la data heroes.
import { heroes } from "../data/heroes";

//el metodo getHeroesByPublisher recibe como parametro 'publisher' que es un string con el nombre del publicante
export const getHeroesByPublisher = ( publisher ) => {

    //se crea un arreglo en el que los campos que contiene son los que son validos
    const validPublisher = ['DC Comics','Marvel Comics'];

    //se valida si el publisher recibido coincide con alguno de los incluidos en el arreglo validPublisher
    if( !validPublisher.includes( publisher ) ){
        //Si no hay coincidencias entonces se atrapa el eeror  y se manda el mensaje de error.
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }
    //si hay coincidencia entonces se retorna un filtrado con los heroes que coincide con la condicion 
    return heroes.filter( hero => hero.publisher === publisher );
    
}