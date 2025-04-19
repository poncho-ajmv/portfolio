import '../styles/footer.css';
import { useState, useEffect } from 'react';

function Footer() {
  

  const [snakeUrl, setSnakeUrl] = useState(null);

  

  const loadSnake = async () => {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/poncho-ajmv/poncho-ajmv/output/github-snake-dark.svg?${Date.now()}`);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      setSnakeUrl(objectUrl);
    } catch (err) {
      console.error('Error cargando snake:', err);
    }
  };

  useEffect(() => {
    loadSnake();
    const timer = setTimeout(loadSnake, 12 * 60 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="footer">
      

      



      {snakeUrl && (
        <div className="github-snake">
          <img
            alt="GitHub Snake Animation"
            src={snakeUrl}
            className="snake-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}



      <p className="made-by">
        <span className="made-by-label">[INFO]</span>  by <strong className="author-name">@poncho_ajmv</strong>
      </p>
    </footer>
  );
}

export default Footer;
