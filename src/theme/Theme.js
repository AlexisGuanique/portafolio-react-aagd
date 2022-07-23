import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Recomendacion: importar createTheme de "@mui/material/styles", te avita problemas con el <CssBaseline />


export const Theme = createTheme({
    palette: {
        primary: {
            main: '#F8F8FF'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        },
    }
})