import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d6cdf',
    },
    secondary: {
      main: '#c2410c',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
