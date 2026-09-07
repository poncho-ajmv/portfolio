import '../styles/footer.css';
import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

const SNAKE_URL =
  'https://raw.githubusercontent.com/poncho-ajmv/poncho-ajmv/output/github-snake-dark.svg';

function Footer() {
  const { t } = useLang();
  const [snakeUrl, setSnakeUrl] = useState(null);

  useEffect(() => {
    let objectUrl;
    let cancelled = false;

    const loadSnake = async () => {
      try {
        const res = await fetch(`${SNAKE_URL}?${Date.now()}`);
        if (!res.ok) return;
        const blob = await res.blob();
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setSnakeUrl(objectUrl);
      } catch (err) {
        // Sin red o repo caído: simplemente no se muestra la serpiente.
      }
    };

    loadSnake();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return (
    <>
      {snakeUrl && (
        <div className="github-snake">
          <img alt="" src={snakeUrl} loading="lazy" decoding="async" />
        </div>
      )}

      {/* .terminal-line y .prompt vienen de la terminal del hero: mismo
          espaciado entre lineas y mismo verde en el prompt, sin repetirlos. */}
      <footer className="footer terminal-box">
        <div className="terminal-line">
          <span className="prompt">&gt; </span>exit
        </div>
        <div className="terminal-line">{t('footer.closed')}</div>
        <div className="terminal-line">
          {t('footer.by')} <strong className="author-name">poncho_ajmv</strong> ·{' '}
          {new Date().getFullYear()}
          <span className="cursor">█</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
