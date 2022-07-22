import { useNavigate, useParams } from "react-router-dom"
import { getProjetcById } from "../helpers/getProjetcById";


export const ProjetcPage = () => {
    
    const { projetcId } = useParams();
    const navigate = useNavigate();

    const projetc = getProjetcById( projetcId );

    if ( !projetc ) {
        return
    }

    return (
        <div>ProjetcPage</div>
    )
}
