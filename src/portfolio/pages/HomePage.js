import { Grid } from "@mui/material"
import { PortfolioLayout } from "../layout/PortfolioLayout"


export const HomePage = () => {
  return (
    <PortfolioLayout>

      <Grid style={{ marginLeft: 25, minWidth: 250 }}>
        <h1>Home Page Alexis Guanique</h1>
        <h3>En esta pagina se debe mostrar informacion acerca de mi</h3>
      </Grid>

    </PortfolioLayout>
  )
}
