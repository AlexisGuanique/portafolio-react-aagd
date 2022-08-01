import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { getProjetcById } from "../helpers/getProjetcById";
import { PortfolioLayout } from "../layout/PortfolioLayout";


export const ProjetcPage = () => {

    const { projetcId } = useParams();
    const navigate = useNavigate();

    const projetc = getProjetcById(projetcId);

    // Desestructuracion en alta, DTB mi muchacho <3
    const { name, description, stack } = projetc;

    // Para navegar una pagina antes
    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <PortfolioLayout>
            <Box
                sx={{ width: '1300px', height: '100%', margin: '50px', display: 'flex' }}
                className='animate__animated animate__fadeInBottomRight'
            >

                <Box
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Box
                        sx={{}}
                    >

                        <Typography component='h1' sx={{ fontSize: '50px' }}>{name}</Typography>
                        <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>{description}</Typography>


                    </Box>

                    <Box
                        sx={{}}
                    >
                        <Typography component='h4' sx={{ fontSize: '20px', paddingTop: '20px' }}>Tecnologias utilizadas:</Typography>

                        <List
                            sx={{}}

                        >
                            {
                                stack.map(skill => {
                                    return <ListItem
                                        key={skill}
                                        sx={{}}

                                    >
                                        {skill}
                                    </ListItem>
                                })
                            }
                        </List>
                    </Box>

                    <Box
                        sx={{}}

                    >
                        <button
                            onClick={onNavigateBack}
                        >
                            Regresar
                        </button>
                    </Box>


                </Box>
            </Box>
        </PortfolioLayout>

    )
}
