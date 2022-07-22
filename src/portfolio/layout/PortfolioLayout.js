import { Toolbar } from '@mui/material'
import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar";



export const PortfolioLayout = ({ children }) => {
  return (
    <Box 
      sx={{ display: 'flex'}}
    >

        <NavBar />


        <Box
            component='main'
            sx={{ flexGrow: 1, p: 1 }}
            className='animate__animated animate__fadeIn'
        >
            <Toolbar />

            { children }

        </Box>


    </Box>
  )
}
