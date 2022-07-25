import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




export const BasicCard = ({
    id,
    lenguaje,
    name,
    description,
    staff,
    link,
}) => {



    
    return (
        <Card
            className='animate__animated animate__fadeInBottomRight'
            style={{
                backgroundColor: 'rgba(220, 220, 220, 0.2)',
                marginLeft: 0,
                margin: 30,
                minWidth: '20%',
                border: '2px solid rgba(200, 200, 200, 1)',
            }}

        >

            <CardContent style={{
                    padding: '40px'

                }} 
            >

                <Typography variant="h4" component="div" sx={{ marginBottom: '30px' }}>
                    {name}
                </Typography>

                <Typography variant="h6" component="div" sx={{ marginBottom: '10px' }}>
                    {description}
                </Typography>

                {
                    (lenguaje === 'javascript')
                    ? <Link style={{ color: '#FFD700', textDecoration: 'none', fontSize: '20px' }} to={`/projetc/${id}`}>Mas detalles...</Link>
                    // Que muestre los links con el color de python
                    : <Link style={{ color: '#1E90FF', textDecoration: 'none', fontSize: '20px' }} to={`/projetc/${id}`}>Mas detalles...</Link>
                    
                }

            </CardContent>
        </Card>
    );
}



