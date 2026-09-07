import '../styles/navbar.css';
import { useLang } from '../i18n/LanguageContext';

// Enlaces normales: html { scroll-behavior: smooth } y el scroll-margin-top
// de cada section hacen el trabajo que antes hacía scrollIntoView a mano.
function NavBar() {
  const { t } = useLang();

  return (
    <nav className="navbar">
      <a href="#experience" className="nav-link">{t('nav.work')}</a>
      <a href="#skills" className="nav-link">{t('nav.tech')}</a>
      <a href="#projects" className="nav-link">{t('nav.projects')}</a>
      <a href="#contact" className="nav-link">{t('nav.contact')}</a>
    </nav>
  );
}

export default NavBar;
