import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './index.css';

import sampleImg from './assets/sample.jpg';
import { sections } from './sections';
// etc...

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Section
        id={'365-producciones'}
        title={'365 Producciones'}
        content={'Creemos que cada artista tiene un universo propio que merece ser amplificado con profesionalismo, estrategia y pasión. Somos una agencia integral de desarrollo musical orientada a potenciar talentos emergentes y consolidados a través de un ecosistema de servicios 360°. '}
        image={sampleImg}
        shape={'shape1'}
        withImg
      />
      {
        sections.map((sec, index) => (
          <Section
            key={sec.id}
            id={sec.id}
            title={sec.title}
            content={sec.content}
            subcontent={sec.subcontent}
            image={sec.image || sampleImg}
            shape={sec.shape || 'shape1'}
            reverse={index % 2 !== 0}
            artists={sec.artists}
          />
        ))
      }

    </ThemeProvider>
  );
}
