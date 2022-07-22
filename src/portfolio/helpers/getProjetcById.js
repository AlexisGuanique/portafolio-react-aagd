import { projets } from "../components/data/projetcs";

export const getProjetcById = ( id ) => {

    return projets.find( projetc => projetc.id === id );
    

};