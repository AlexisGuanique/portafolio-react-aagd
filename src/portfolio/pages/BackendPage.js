import { Box, Grid, List, ListItem, Toolbar, Typography } from "@mui/material"
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
        <Box
          component='div'
          sx={{ marginLeft: '30px' }}
        >
          <Typography variant='h1' component='h1' sx={{ fontSize: '40px' }}>Proyectos realizados con Python</Typography>

          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
            Estas son algunas de las tecnologias utilizadas en las aplicaciones incluidas en la siguiente lista:
          </Typography>

          <Box
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

          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
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
