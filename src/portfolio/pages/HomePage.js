import { Box, Toolbar } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"




export const HomePage = () => {
  return (
    <PortfolioLayout>
      <Toolbar />

      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          marginLeft: '10px',
          marginRight: '10px',

        }}
      >

        {/* Caja del texto */}
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '80%',
            paddingLeft: 10,
            alignSelf: 'center',
          }}

        >
          <h1>Home Page Alexis Guanique</h1>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>

        </Box>


        {/* Caja de la imagen */}
        <Box
          component='div'
          sx={{
            width: '100%',
            maxWidth: '800px',
            maxHeight: '600px',
            display: {
              xs: 'none',
              md: 'flex',

            },
            justifyContent: 'center',
          }}

        >
          <Box
            component="img"
            sx={{ width: '70%', height: '100%' }}
            className='animate__animated animate__backInRight'
            src='../../../assets/Codetyping-2.png'
          />
        </Box>

      </Box>

      {/* Aqui va la seccion del medio */}
      {/* PRUEBA */}
      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          marginLeft: '10px',
          marginRight: '10px',
          backgroundColor: 'gray',


        }}
      >

        {/* Caja del texto */}
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            height: '80%',
            paddingLeft: 10,
            alignSelf: 'center',
          }}

        >
          <h1>Home Page Alexis Guanique</h1>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>
          <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>

        </Box>


        {/* Caja de la imagen */}
        <Box
          component='div'
          sx={{
            width: '100%',
            maxWidth: '800px',
            maxHeight: '600px',
            display: {
              xs: 'none',
              md: 'flex',

            },
            justifyContent: 'center',
          }}

        >
          <Box
            component="img"
            sx={{ width: '70%', height: '100%' }}
            className='animate__animated animate__backInRight'
            src='../../../assets/Codetyping-2.png'
          />
        </Box>

      </Box>


    </PortfolioLayout>
  )
}
