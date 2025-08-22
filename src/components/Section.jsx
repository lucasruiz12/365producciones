// src/components/Section.jsx
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ImageSection from './ImageSection';
import Artists from './Artists';

export default function Section({ id, title, content, subcontent, image, reverse, withImg, artists }) {
  const [isVisible, setIsVisible] = useState(false);
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

  const flexDir = { xs: 'column', md: reverse ? 'row-reverse' : 'row' };
  const imageJustify = { xs: 'center', md: reverse ? 'flex-start' : 'flex-end' };

  if (artists) {
    return (
      <Artists />
    );
  };

  return (
    <Box
      id={id}
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: flexDir,
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Texto */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { md: '50%' },
                color: 'white',
                mt: reverse ? { md: 8 } : 0, // baja el texto si reverse
              }}
            >
              <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
                {title}
              </Typography>

              <Box sx={{ maxWidth: '44rem' }}>
                <Typography
                  variant="body1"
                  sx={{ color: 'white', mb: subcontent ? 2 : 0 }}
                >
                  {content}
                </Typography>

                {subcontent && (
                  <Box
                    component="ul"
                    sx={{
                      pl: 3,
                      m: 0,
                      color: 'white',
                      listStyleType: 'disc',
                    }}
                  >
                    {subcontent.map((it, i) => (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{ color: 'white', mb: subcontent ? 2 : 0 }}
                      >
                        <li >{it}</li>
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>

            {/* Imagen */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { md: '50%' },
                display: 'flex',
                justifyContent: { xs: 'center', md: imageJustify },
                mt: reverse ? 0 : { md: 8 }, // baja la imagen si NO es reverse
              }}
            >
              <ImageSection image={image} title={title} />
            </Box>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
}
