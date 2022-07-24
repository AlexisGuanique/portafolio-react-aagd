import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { getProjetcById } from "../helpers/getProjetcById";


export const ProjetcPage = () => {

    const { projetcId } = useParams();
    const navigate = useNavigate();

    const projetc = getProjetcById( projetcId );

    // Desestructuracion en alta, DTB mi muchacho <3
    const { name, description, staff } = projetc;

    // Para navegar una pagina antes
    const onNavigateBack = () => {
        navigate(-1);
    };

    return (
        <Grid
            style={{ marginLeft: 50, marginTop: 30 }}
            className='animate__animated animate__fadeInBottomRight'
        >

            <Grid
                container
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <Grid>
                    <h3>{ name }</h3>
                    <h4>{ description }</h4>
                    <h4>Tecnologias utilizadas: </h4>

                    <ul>
                        {
                            staff.map(skill => {
                                return <li key={skill}>{skill}</li>
                            })
                        }
                    </ul>


                </Grid>
                <Grid>
                    <button
                        onClick={ onNavigateBack }
                    >
                        Regresar
                    </button>
                </Grid>


            </Grid>
        </Grid>
    )
}
