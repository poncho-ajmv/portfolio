import { useEffect, useRef, useState } from 'react';
import '../App.css';
import NavBar from './NavBar';
import SettingsMenu from './SettingsMenu';
import { useLang } from '../i18n/LanguageContext';

// Avatar: arte de Captain Rex por grantgoboom
// https://www.deviantart.com/grantgoboom/art/Rex-119528260
// Se sirve desde imgur (resolucion original) con la copia local como respaldo.

function MainHeader({ darkMode, setDarkMode }) {
  const { t } = useLang();
  const [isShrunk, setIsShrunk] = useState(false);
  const isShrunkRef = useRef(false);

  useEffect(() => {
    // Histéresis: umbrales distintos para encoger y expandir.
    // Al encogerse, el header sticky cambia de altura y desplaza el scroll;
    // con un único umbral eso generaba un bucle encoger/expandir
    // (el parpadeo al dejar el scroll a media altura). La zona muerta
    // entre EXPAND_AT y SHRINK_AT lo elimina.
    const SHRINK_AT = 140;
    const EXPAND_AT = 70;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      if (!isShrunkRef.current && y > SHRINK_AT) {
        isShrunkRef.current = true;
        setIsShrunk(true);
      } else if (isShrunkRef.current && y < EXPAND_AT) {
        isShrunkRef.current = false;
        setIsShrunk(false);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update(); // estado inicial correcto al cargar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`modern-header ${isShrunk ? 'shrink' : 'expanded'}`}>
      <div className="header-container">
        <div className="header-left">
          <img
            src="https://i.imgur.com/O3Lulcc.jpeg"
            alt="poncho_ajmv"
            className="header-avatar"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/avatar.png';
            }}
          />
          <div className="header-text">
            <h1 className="header-name">poncho_ajmv</h1>
            <span className="job-status">{t('header.jobStatus')}</span>
          </div>
        </div>

        <div className="header-right">
          <NavBar />
          <SettingsMenu darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
