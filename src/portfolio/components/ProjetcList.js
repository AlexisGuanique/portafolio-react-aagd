import { Grid } from '@mui/material';
import { getProjetcByLenguaje } from '../helpers/getProjetcByLenguaje';
import { BasicCard } from './BasicCard';

export const ProjetcList = ({ lenguaje }) => {

    const projetcs = getProjetcByLenguaje( lenguaje );

    console.log( projetcs );

    return (
        <Grid
            container
        >
            {
                
                projetcs.map( projetc =>
                    <BasicCard 
                        key={ projetc.id }
                        {...projetc}
                    />
                )
            }

        </Grid>
    )
}