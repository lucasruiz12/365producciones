// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: { main: '#F7931E' },
    secondary: { main: '#EC008C' },
    warning: { main: '#F6D047' },
    info: { main: '#662D91' },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
    background: {
      default: '#1C1C1C',
      paper: '#2A2A2A',
    },
  },
  custom: {
    gradientMain:
      'linear-gradient(90deg, #F6D047 0%, #F7931E 30%, #EC008C 65%, #662D91 100%)',
  },
  typography: {
    fontFamily: "'Mulish', sans-serif",
    h1: { fontWeight: 800, fontSize: '3rem' },
    h2: { fontWeight: 700, fontSize: '2.5rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
});

export default theme;
