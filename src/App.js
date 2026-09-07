import './App.css';
import MainHeader from './components/MainHeader';
import Skills from './components/Skills';
import DiscordStatus from './components/DiscordStatus';
import Socials from './components/Socials';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import TerminalSimulator from './components/TerminalSimulator';
import Experience from './components/Experience';
import { useState, useEffect } from 'react';
import { useLang } from './i18n/LanguageContext';

function App() {
  const { t, lang } = useLang();
  const [darkMode, setDarkMode] = useState(true);

  // El atributo se escribe aqui, no en un efecto, para que el cambio ocurra
  // dentro de la transicion y se pueda animar. Sin soporte de View Transitions
  // o con movimiento reducido, cambia al instante.
  const setTheme = (dark) => {
    const cambiar = () => {
      document.documentElement.dataset.theme = dark ? 'dark' : 'light';
      setDarkMode(dark);
    };
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (document.startViewTransition && !reduce) {
      document.startViewTransition(cambiar);
    } else {
      cambiar();
    }
  };

  // CV descargable según el idioma activo (es / en)
  const cvFile = lang === 'es' ? '/CV_Alfonso_Moraga_ES.pdf' : '/CV_Alfonso_Moraga_EN.pdf';

  // Limpia hash de URL + scroll al top
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainHeader darkMode={darkMode} setDarkMode={setTheme} />

      <div className="wrap">
        <TerminalSimulator />

        <Experience />

        <section id="skills">
          <h2 className="sec-title">{t('skills.title')}</h2>
          <div className="side-by-side-section">
            <Skills />
            <DiscordStatus />
          </div>
        </section>

        <section id="projects">
          <h2 className="sec-title">{t('projects.title')}</h2>
          <ProjectCard />
        </section>

        <section id="contact">
          <div className="cta-mario-block">
            <p className="cta-mario-line">
              <span className="prompt">&gt;</span> {t('cta.line')}
            </p>
            <div className="cv-center">
              <a
                href={cvFile}
                download={`CV_Alfonso_Moraga_${lang.toUpperCase()}.pdf`}
                className="cv-download-btn"
              >
                {t('cta.downloadCv')}
              </a>
            </div>
          </div>

          <Socials />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
