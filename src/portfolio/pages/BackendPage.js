import { Grid } from "@mui/material"
import { ProjetcList } from "../components/ProjetcList"
import { PortfolioLayout } from "../layout/PortfolioLayout"


export const BackendPage = () => {
  return (
    <PortfolioLayout>
      <Grid style={{ marginLeft: 25, minWidth: 250 }}>
        <h1>Backend Projects Pages</h1>
        <h3>En esta pagina se debe mostrar informacion acerca de mis proyectos backend</h3>
      </Grid>


      <Grid
        container

      >
        <ProjetcList lenguaje ={'python'} />


      </Grid>

    </PortfolioLayout>
  )
}
