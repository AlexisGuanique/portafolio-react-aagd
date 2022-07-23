import { projets } from '../components/data/projetcs'


export const getProjetcByLenguaje = ( lenguaje ) => {


    const validLenguaje = ['javascript', 'python' ]

    if ( !validLenguaje.includes( lenguaje )){
        throw new Error( `${ lenguaje } lenguaje no valido `)
    }

    return projets.filter( projetc => projetc.lenguaje === lenguaje );


}