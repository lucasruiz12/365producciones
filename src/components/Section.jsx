import Grid from '@mui/material/Grid';
import { Container, Typography, Box } from '@mui/material';

export default function Section({ id, title, content, subcontent, image, shape, reverse }) {
  return (
    <Box
      id={id}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} direction={reverse ? 'row-reverse' : 'row'} alignItems="center">
          <Grid xs={12} md={6}>
            <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mb: subcontent ? 2 : 0 }}>
              {content}
            </Typography>

            {subcontent && (
              <Box component="ul" sx={{ color: 'white', pl: 3, m: 0 }}>
                {subcontent.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </Box>
            )}
          </Grid>

          <Grid xs={12} md={6}>
            <Box
              className={shape}
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 400,
                mx: 'auto',
                '& img': {
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-10%',
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                  background: (theme) => theme.custom.gradientMain,
                  filter: 'blur(60px)',
                  zIndex: -1,
                },
              }}
            >
              <img src={image} alt={title} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
