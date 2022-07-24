import { NavLink } from 'react-router-dom'
import { Grid, AppBar, Toolbar, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const NavBar = () => {


    return (
        <AppBar
            position='fixed'
            sx={{ boxShadow: '1px 2px 2px #D3D3D3' }}

        >

            <Toolbar>

                <Grid
                    container
                    padding='20px'
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='h6' noWrap component='div' style={{ fontSize: '27px', color:'inherit' }}>Alexis Guanique</Typography>

                    <Grid
                        item
                        sx={{ display: 'flex' }}

                    >

                        <NavLink style={{ color: 'inherit', padding: '10px', textDecoration: 'none', fontSize: '20px' }} to='/home'>Home</NavLink>
                        <NavLink style={{ color: 'inherit', padding: 10, textDecoration: 'none', fontSize: '20px' }} to='/frontend'>Frontend</NavLink>
                        <NavLink style={{ color: 'inherit', marginRight: 20, padding: '10px', textDecoration: 'none', fontSize: '20px' }} to='/backend'>Backend</NavLink>


                        <HomeOutlinedIcon sx={{ fontSize: 50, color: 'inherit' }} />


                    </Grid>


                </Grid>
            </Toolbar>


        </AppBar>
    )
}
