import { Box, List, ListItem, Toolbar, Typography } from "@mui/material"
import { ProjetcList } from "../components/ProjetcList"
import { PortfolioLayout } from "../layout/PortfolioLayout"


export const BackendPage = () => {
  return (
    <PortfolioLayout>
      <Toolbar />

      <Box sx={{
        width: '100%',
        height: '80%',
      }}
      >
        {/* Caja del emcabezado */}
        <Box
          component='div'
          sx={{ marginLeft: '30px' }}
        >
          <Typography variant='h1' component='h1' sx={{ fontSize: '40px' }}>Proyectos realizados con Python</Typography>

          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
            Estas son algunas de las tecnologias utilizadas en las aplicaciones incluidas en la siguiente lista:
          </Typography>
        </Box>


        {/* Caja del medio */}
        <Box
          sx={{ width: '1300px', height: '80%', display: 'flex', justifyContent: 'space-around' }}
        >
          {/* Caja de la lista */}
          <Box
            sx={{ marginLeft: '30px' }}
          >
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem>Python</ListItem>
              <ListItem>Flask</ListItem>
              <ListItem>Tkinter</ListItem>

              <ListItem>MySQL</ListItem>
              <ListItem>SQL</ListItem>
              <ListItem>Mongo</ListItem>

              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>

            </List>
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
              sx={{ width: '40%', height: '80%' }}
              className='animate__animated animate__backInRight'
              src='../../../assets/python.png'
            />
          </Box>

        </Box>

        <Box
          sx={{ padding: '30px' }}
        >

          <Typography component='p' sx={{ fontSize: '20px'}}>
            A continuación se muestra una lista de los proyectos, en los cuales se puede apreciar la información de cada uno de ellos:
          </Typography>
        </Box>




        <Box>


          <ProjetcList lenguaje={'python'} />



        </Box>


      </Box>






    </PortfolioLayout>
  )
}
