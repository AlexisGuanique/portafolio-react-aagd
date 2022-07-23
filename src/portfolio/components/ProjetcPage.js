import { Grid } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProjetcById } from "../helpers/getProjetcById";


export const ProjetcPage = () => {

    console.log('hola mundo')
    const { projetcId } = useParams();
    const navigate = useNavigate();

    const projetc = getProjetcById(projetcId);

    const { staff } = projetc;

    console.log(staff);
    const onNavigateBack = () => {
        navigate(-1);
    };


    if (!projetc) {
        return <Navigate to='home' />;
    }


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
                    <h3>{projetc.name}</h3>
                    <h4>{projetc.description}</h4>
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
                        onClick={onNavigateBack}
                    >
                        Regresar
                    </button>
                </Grid>


            </Grid>
        </Grid>
    )
}
