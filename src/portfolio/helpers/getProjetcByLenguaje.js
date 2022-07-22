import { projets } from '../components/data/projetcs'


export const getProjetcByLenguaje = ( lenguaje ) => {


    // Hacemos una validacion para que al momento de ingresar la categoria sea uno de los dos disponibles, si normalizePathname, entonces retorna un error
    const validLenguaje = ['javascript', 'python' ]

    if ( !validLenguaje.includes( lenguaje )){
        throw new Error( `${ lenguaje } no es valido como categoria `)
    }

    return projets.filter( projetc => projetc.lenguaje === lenguaje );


}