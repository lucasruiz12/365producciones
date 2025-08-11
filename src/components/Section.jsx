// src/components/Section.jsx
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ImageSection from './ImageSection';

export default function Section({ id, title, content, subcontent, image, shape, reverse }) {
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
              gap: { xs: 6, md: 10 },
            }}
          >
            {/* Texto */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 45%' },
                color: 'white',
              }}
            >
              <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
                {title}
              </Typography>

              <Box sx={{ maxWidth: { md: '44rem' } }}>
                <Typography variant="body1" sx={{ color: 'white', mb: subcontent ? 2 : 0 }}>
                  {content}
                </Typography>

                {subcontent && (
                  <Box component="ul" sx={{ pl: 3, m: 0, color: 'white' }}>
                    {subcontent.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>

            {/* Imagen */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '0 0 55%' },
                display: 'flex',
                justifyContent: imageJustify,
                minWidth: { xs: '100%', md: 0 },
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
