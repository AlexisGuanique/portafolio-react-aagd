import { NavLink } from 'react-router-dom'
import { Grid, AppBar, Toolbar, Typography } from '@mui/material';
import { HomeRepairServiceOutlined } from '@mui/icons-material'



export const NavBar = () => {
    return (
        <AppBar
            position='fixed'
            sx={{ boxShadow:' 1px 2px 2px #1465bb' }}
            
        >

            <Toolbar>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Grid 
                        item
                        sx={{ display: 'flex' }}

                    >   
                        <HomeRepairServiceOutlined color="inherit" sx={{ fontSize: 45 }}/>

                        <NavLink style={{ color:'inherit', marginLeft: 20, padding: '10px', textDecoration: 'none', fontSize: '20px' }} to='/home'>Home</NavLink>
                        <NavLink style={{ color:'inherit', padding: '10px', textDecoration: 'none', fontSize: '20px'  }} to='/frontend'>Frontend</NavLink>
                        <NavLink style={{ color:'inherit', padding: '10px', textDecoration: 'none', fontSize: '20px'  }} to='/backend'>Backend</NavLink>


                    </Grid>


                    <Typography variant='h6' noWrap component='div'>Alexis Guanique</Typography>







                </Grid>
            </Toolbar>


        </AppBar>
    )
}
