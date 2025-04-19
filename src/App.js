import './App.css';
import MainHeader from './components/MainHeader';
import Skills from './components/Skills';
import DiscordStatus from './components/DiscordStatus';
import Socials from './components/Socials';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import TerminalSimulator from './components/TerminalSimulator';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Aplica clase para modo claro/oscuro
  useEffect(() => {
    document.body.classList.remove('dark-body', 'light-body');
    document.body.classList.add(darkMode ? 'dark-body' : 'light-body');
  }, [darkMode]);

  // Limpia hash de URL + scroll al top
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  // Detecta scroll y aplica clase shrink
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add('shrink');
      } else {
        document.body.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      {/* ✅ Ahora le pasamos darkMode y setDarkMode al header */}
      <MainHeader darkMode={darkMode} setDarkMode={setDarkMode} />

      <TerminalSimulator />

      <div className="side-by-side-section" id="skills">
        <Skills />
        <DiscordStatus />
      </div>

      <ProjectCard darkMode={darkMode} />

      <section id="contact">
        <div className="cta-mario-block">
          <p className="cta-mario-line">
            <span className="prompt">&gt;</span> Looking for an engineer? I’m ready for new challenges.
          </p>
          <div className="cv-center">
            <a 
              href="/poncho_ajmv_CV.pdf" 
              download 
              className="cv-download-btn"
            >
              💾 [DOWNLOAD CV]
            </a>
          </div>
        </div>

        <Socials />
        <Footer />
      </section>


    </div>
  );
}

export default App;
