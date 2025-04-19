import { useEffect, useState } from 'react';
import '../App.css';
import NavBar from './NavBar';

function MainHeader({ darkMode, setDarkMode }) {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`modern-header ${isShrunk ? 'shrink' : 'expanded'}`}>
      <div className="header-container">
        <div className="header-left">
          <img
            src="https://i.imgur.com/O3Lulcc.jpeg"
            alt="Avatar"
            className="header-avatar"
          />
          {!isShrunk && (
            <div className="header-text">
              <h1 className="header-name fira-code">poncho_ajmv</h1>
              <span className="job-status fira-code">System Engineering Student</span>

            </div>
          )}
          {isShrunk && <h1 className="header-name">poncho_ajmv</h1>}
        </div>

        {/* Nuevo contenedor a la derecha */}
        <div className="header-right">
          <NavBar />
          <button
            className="mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
