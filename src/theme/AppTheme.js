import { Theme } from './Theme';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';


export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>

            <CssBaseline />

            {children}

        </ThemeProvider>
    )
}


