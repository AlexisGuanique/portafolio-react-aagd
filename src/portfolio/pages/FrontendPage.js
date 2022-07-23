import { Grid } from "@mui/material"
import { ProjetcList } from "../components/ProjetcList"
import { PortfolioLayout } from "../layout/PortfolioLayout"



export const FrontendPage = () => {

  return (
    <PortfolioLayout>

      <Grid style={{marginLeft: 25}}>
        <h1>Frontend Projects Pages</h1>
        <h3>En esta pagina se debe mostrar informacion acerca de mis proyectos frontend</h3>
      </Grid>


      <Grid
        container


      >
        <ProjetcList lenguaje ={'javascript'} />



      </Grid>



    </PortfolioLayout>
  )
}
