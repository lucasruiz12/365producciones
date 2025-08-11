import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>  {/* O usa createTheme() directo */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);