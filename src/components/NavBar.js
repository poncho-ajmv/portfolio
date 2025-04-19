import { useEffect, useState } from 'react';
import '../styles/navbar.css';

function NavBar({ darkMode }) {
  const [scrolled, setScrolled] = useState(false);

  // Actualiza la clase del <body> al cambiar el modo
  useEffect(() => {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Detecta si se hizo scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'shrink' : ''}`}>
      <button onClick={() => handleScrollTo('skills')} className="nav-link">&gt; _Tech</button>
      <button onClick={() => handleScrollTo('projects')} className="nav-link">&gt; _Projects</button>
      <button onClick={() => handleScrollTo('contact')} className="nav-link">&gt; _Contact</button>
    </nav>
  );
}

export default NavBar;
