import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




export const BasicCard = ({
    id,
    name,
    description,
    staff,
    link,
}) => {


    return (
        <Card
            className='animate__animated animate__fadeInBottomRight'
            style={{
                backgroundColor: 'rgba(135, 206, 235, 0.5)',
                marginLeft: 0,
                margin: 30,
                padding: '10px',
                minWidth: 400,
            }}

        >

            <CardContent sx={{ p: 2 }} >

                <Typography variant="h4" component="div">
                    {name}
                </Typography>

                <Typography variant="h6" component="div">
                    {description}
                </Typography>

                {/* <Typography variant="body2">
                    Descripcion del proyecto
                </Typography> */}

                <Link style={{ color: '#1E90FF', textDecoration: 'none', fontSize: '20px' }} to={'/project/123'}>Mas detalles...</Link>

            </CardContent>
        </Card>
    );
}



