import { Box} from '@mui/material';
import { getProjetcByLenguaje } from '../helpers/getProjetcByLenguaje';
import { BasicCard } from './BasicCard';

export const ProjetcList = ({ lenguaje }) => {

    const projetcs = getProjetcByLenguaje( lenguaje );

    // console.log( projetcs );

    return (
        <Box
            
            sx={{ display: 'flex'}}
        >
            {
                
                projetcs.map( projetc =>
                    <BasicCard 
                        key={ projetc.id }
                        {...projetc}
                    />
                )
            }

        </Box>
    )
}