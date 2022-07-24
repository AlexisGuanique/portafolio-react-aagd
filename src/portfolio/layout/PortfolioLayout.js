import { Grid, Toolbar } from '@mui/material'
import { NavBar } from "../components/NavBar";



export const PortfolioLayout = ({ children }) => {
  return (
    <Grid 
      sx={{ display: 'flex'}}
    >

        <NavBar />


        <Grid
            component='main'
            className='animate__animated animate__fadeIn'
            sx={{ width: '100%', height: '80%', display: 'flex', flexDirection: 'column', position: 'relative' }}
        >
            <Toolbar 
              style={{ marginTop: '10px'}}
            />

            { children }

            

        </Grid>


    </Grid>
  )
}
