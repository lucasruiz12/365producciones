import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const sections = [
    { label: '¿Quiénes somos?', id: 'quienes-somos' },
    { label: 'Qué hacemos?', id: 'que-hacemos' },
    { label: 'Misión', id: 'mision' },
    { label: 'Visión', id: 'vision' },
    { label: 'Nuestros artistas', id: 'artistas' },
    { label: 'Valores', id: 'valores' },
    { label: '¿Por qué elegirnos?', id: 'porque' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: (theme) => theme.custom.gradientMain,
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'center', gap: 2 }}>
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          ) : (
            sections.map((sec) => (
              <Link
                key={sec.id}
                to={sec.id}
                smooth
                duration={500}
                offset={-70}
              >
                <Button
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', // leve efecto hover
                      transition: 'background-color 0.3s ease'
                    }
                  }}
                >
                  {sec.label}
                </Button>
              </Link>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#121212', // gris oscuro casi negro
            color: 'white'
          }
        }}
      >
        <List sx={{ width: 250 }}>
          {sections.map((sec) => (
            <ListItem
              button
              key={sec.id}
              onClick={() => setOpen(false)}
              component={Link}
              to={sec.id}
              smooth
              duration={1500}
              offset={-70}
              sx={{
                cursor: 'pointer',
                color: 'white',
                padding: '1rem',
                transition: 'background-color 300ms ease', // <- aquí la transición aplicada al elemento
                '&:hover': {
                  background: (theme) => theme.custom.gradientMainOpacity,
                  transition: 'background-color 300ms ease'
                },
                '&.active': {
                  background: (theme) => theme.custom.gradientMainOpacity
                }
              }}
            >
              <ListItemText primary={sec.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
