import { Box, Toolbar, Typography } from "@mui/material"
import { Link, NavLink } from "react-router-dom"
import { PortfolioLayout } from "../layout/PortfolioLayout"




export const HomePage = () => {
  return (
    <PortfolioLayout>
      <Toolbar />
      {/* PRIMERA */}
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
          className='animate__animated animate__fadeIn'

        >
          <Typography variant='h1' component='h1' sx={{ fontSize: { md: '60px', xs: '30px' } }}>Alexis Guanique</Typography>
          <Typography variant='h1' component='h1' sx={{ fontSize: { md: '40px', xs: '20px' }, paddingTop: '20px' }}>Sotfware Developer</Typography>

          <Typography component='p' sx={{ fontSize: { md: '25px', xs: '10px' }, paddingTop: '20px' }}>
            Construyo aplicaciones dinámicas con JavaScript, utilizando su libreria React.
          </Typography>
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
            src='../../../assets/javascript-react.png'
          />
        </Box>

      </Box>


      {/* SEGUNDA */}
      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          marginLeft: '10px',
          marginRight: '10px',
          backgroundColor: 'rgba(220, 220, 220, 0.5)',


        }}
      >

        {/* Caja de la imagen */}
        <Box
          component='div'
          sx={{
            width: '100%',
            maxWidth: '700px',
            maxHeight: '500px',
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
            className='animate__animated animate__backInLeft'
            src='../../../assets/Codetyping-2.png'
          />
        </Box>

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
          <Typography variant='h1' component='h1' sx={{ fontSize: '30px' }}>Desarrollo con pasión aplicaciones y y sitios web para personas.</Typography>
          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
            Además me encuentro en un constante aprendizaje de nuevas tecnologias con el objetivo de mejorar aun mas mis habilidades.
            Esta pagina web la construí desde cero con JavaScript y su libreria React; ademas implementando el conjunto de herramientas de navegacion que otorga React Router Dom y utilizando la libreria Material-UI.
          </Typography>

        </Box>


      </Box>


      {/* TERCERA */}
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
          className='animate__animated animate__fadeIn'

        >
          <Typography variant='h1' component='h1' sx={{ fontSize: { md: '60px', xs: '30px' } }}>SKILLS</Typography>
          <Typography variant='h1' component='h1' sx={{ fontSize: { md: '40px', xs: '20px' }, paddingTop: '20px' }}>JavaScript</Typography>

          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
            Poseo conocimientos solidos acerca del lenguaje de programación JavaScript, asi como de si libreria React.
          </Typography>

          <Typography sx={{ fontSize: '20px', paddingTop: '20px' }}>
            No estas convencido? mira lo que he construído con esas tecnologias haciendo click
            <NavLink style={{ color: '#FFD700', marginRight: 20, padding: '10px', textDecoration: 'none', fontSize: '20px' }} to='/frontend'>AQUI</NavLink>
          </Typography>

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
            sx={{ width: '50%', height: '100%' }}
            className='animate__animated animate__backInRight'
            src='../../../assets/javascript.png'
          />

          <Box
            component="img"
            sx={{ width: '50%', height: '100%' }}
            className='animate__animated animate__backInRight'
            src='../../../assets/react.png'
          />
        </Box>

      </Box>

      <Toolbar sx={{ marginTop: '10px' }} />

      {/* CUARTA */}
      <Box
        sx={{
          width: '100%',
          height: '80%',
          display: 'flex',
          marginLeft: '10px',
          marginRight: '10px',

        }}
      >

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
            src='../../../assets/flask.png'
          />
          <Box
            component="img"
            sx={{ width: '40%', height: '80%' }}
            className='animate__animated animate__backInRight'
            src='../../../assets/python.png'
          />
        </Box>

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
          className='animate__animated animate__fadeIn'

        >
          <Typography variant='h1' component='h1' sx={{ fontSize: { md: '40px', xs: '20px' }, paddingTop: '20px' }}>Python</Typography>

          <Typography component='p' sx={{ fontSize: '20px', paddingTop: '20px' }}>
            Tambien poseo conocimientos solidos acerca del lenguaje Python, y su framework web Flask.
          </Typography>

          <Typography sx={{ fontSize: '20px', paddingTop: '20px' }}>
            No estas convencido aún? mira lo que he construído con esas tecnologias haciendo click
            <NavLink style={{ color: '#1E90FF', marginRight: 20, padding: '10px', textDecoration: 'none', fontSize: '20px' }} to='/backend'>AQUI</NavLink>
          </Typography>

        </Box>


      </Box>





    </PortfolioLayout>
  )
}
