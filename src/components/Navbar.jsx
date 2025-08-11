import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-scroll';

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

    return (
        <AppBar
            position="fixed"
            sx={{
                background: (theme) => theme.custom.gradientMain,
                boxShadow: 'none'
            }}
        >
            <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
                {sections.map((sec) => (
                    <Link
                        key={sec.id}
                        to={sec.id}
                        smooth
                        duration={500}
                        offset={-70}
                    >
                        <Button sx={{ color: 'white', fontWeight: 'bold' }}>
                            {sec.label}
                        </Button>
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    );
}
