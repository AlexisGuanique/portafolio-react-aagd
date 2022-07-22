import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


export const Theme = createTheme({
    palette: {
        primary: {
            main: '#003785'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        },
    }
})