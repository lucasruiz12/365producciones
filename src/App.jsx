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
          />
        ))
      }
      {/* Y así con las demás */}
    </ThemeProvider>
  );
}
