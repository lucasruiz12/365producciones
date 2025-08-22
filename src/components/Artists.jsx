// src/components/Artists.jsx
import { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Modal, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { artistsData } from '../artistsData';
import './Artists.css';

export default function Artists() {
    const [isVisible, setIsVisible] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const handleOpen = (artist) => {
        setSelectedArtist(artist);
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setSelectedArtist(null);
    };

    const renderDescription = (desc) => {
        if (!desc) return null;
        const paragraphs = desc.split('\n\n');
        return paragraphs.map((paragraph, index) => (
            <Typography key={index} variant="body1" paragraph sx={{ color: 'white' }}>
                {paragraph}
            </Typography>
        ));
    };

    return (
        <Box
            id="artistas"
            sx={{
                backgroundColor: (t) => t.palette.background.default,
                py: 12,
            }}
            ref={ref}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <Typography
                        variant="h2"
                        sx={{ color: 'white', mb: 6, textAlign: 'center' }}
                    >
                        NUESTROS ARTISTAS
                    </Typography>

                    <Grid
                        container
                        spacing={20} // más separación
                        justifyContent="center"
                    >
                        {artistsData.map((artist, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12} sm={6} md={4} // máximo 3 por fila
                                display="flex"
                                justifyContent="center"
                            >
                                <Card
                                    onClick={() => handleOpen(artist)}
                                    sx={{
                                        width: 240,
                                        height: 480,
                                        backgroundImage: `url(${artist.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        borderRadius: '0 5rem 0 5rem',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.025)',
                                            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'rgba(0, 0, 0, 0)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            px: 2,
                                            textAlign: 'center',
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            },
                                            '&:hover .artistName': {
                                                opacity: 1,
                                                transform: 'translateY(0)',
                                            },
                                        }}
                                    >
                                        <Typography
                                            className="artistName"
                                            variant="h5"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 600,
                                                opacity: 0,
                                                transform: 'translateY(20px)',
                                                transition: 'opacity 0.4s ease, transform 0.4s ease',
                                                letterSpacing: '0.08em',
                                            }}
                                        >
                                            {artist.name}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </motion.div>
            </Container>

            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="artist-modal-title"
                aria-describedby="artist-modal-description"
            >
                <Box
                    className="modal-content"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', sm: '80%', md: '60%' },
                        bgcolor: (t) => t.palette.background.paper,
                        boxShadow: 24,
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    {selectedArtist && (
                        <>
                            {/* Botón de cierre (cruz) */}
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (t) => t.palette.grey[400],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>

                            {/* Título (Name) */}
                            <Typography
                                id="artist-modal-title"
                                variant="h3"
                                sx={{
                                    color: 'white',
                                    mb: 1,
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.8rem', sm: '2.5rem' },
                                }}
                            >
                                {selectedArtist.name}
                            </Typography>

                            {/* Subtítulo */}
                            <Typography
                                variant="h5"
                                sx={{
                                    color: (t) => t.palette.text.secondary,
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                                }}
                            >
                                {selectedArtist.subtitle}
                            </Typography>

                            {/* Descripción */}
                            {renderDescription(selectedArtist.description)}

                            {/* Botón WhatsApp */}
                            <Box sx={{ mt: 4, textAlign: 'right' }}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="20" />}
                                    onClick={() => {
                                        const message = `Hola, quisiera más información para contratar a *${selectedArtist.name}*`;
                                        const url = `https://wa.me/5493875040133?text=${encodeURIComponent(message)}`;
                                        window.open(url, '_blank');
                                    }}
                                >
                                    Contactar por WhatsApp
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
}
