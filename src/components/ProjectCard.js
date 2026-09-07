// src/components/ProjectCard.js
import '../styles/ProjectCard.css';
import { useLang } from '../i18n/LanguageContext';

// Datos NO traducibles (imágenes y enlaces). El título, la descripción y las
// etiquetas se toman de projects.items, en el mismo orden que este array.
const projectsMeta = [
  {
    image: '/lienzo.jpg',
    liveLink: 'https://lienzo.surge.sh/',
    codeLink: 'https://github.com/poncho-ajmv/Lienzo',
  },
  {
    image: '/mundial2026.jpg',
    liveLink: null,
    codeLink: 'https://github.com/poncho-ajmv/mundial-2026',
  },
  {
    // Sin captura: portada tipográfica con la misma altura que las imágenes.
    cover: '[ USB ]\n\n> respaldo.py',
    liveLink: null,
    codeLink: 'https://github.com/poncho-ajmv/respaldo-automatico-usb',
  },
  {
    image: '/filmfanatic.jpg',
    liveLink: 'https://film-fanatic-eta.vercel.app',
    codeLink: 'https://github.com/poncho-ajmv/FilmFanatic',
  },
  {
    image: '/lexico.jpg',
    liveLink: 'https://analizador-lexico-web.vercel.app/',
    codeLink: 'https://github.com/poncho-ajmv/analizador-lexico-web',
  },
  {
    image: '/terminal.jpg',
    liveLink: 'https://terminal-interactiva.vercel.app/',
    codeLink: 'https://github.com/poncho-ajmv/terminal-interactiva',
  },
];

const IconCode = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z" />
  </svg>
);

const IconLive = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 3v2h3.6l-9.8 9.8 1.4 1.4L19 6.4V10h2V3zM5 5h5V3H3v18h18v-7h-2v5H5z" />
  </svg>
);

export default function ProjectCard() {
  const { t } = useLang();

  // Combina metadatos (links/imágenes) con texto traducido por índice.
  const projects = projectsMeta.map((meta, i) => ({
    ...meta,
    ...(t('projects.items')[i] || {}),
  }));

  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        <article key={index} className="project-wrapper panel">
          {/* La portada entera lleva al proyecto. Fuera de la ruta de Tab:
              los botones de abajo van al mismo sitio. */}
          <a
            className="project-media"
            href={project.liveLink || project.codeLink}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            aria-hidden="true"
          >
            {project.image ? (
              <span className="project-image-box">
                <img src={project.image} alt="" loading="lazy" />
              </span>
            ) : (
              <span className="project-cover">{project.cover}</span>
            )}
          </a>

          <div className="project-content-box">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tags">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a className="btn" href={project.codeLink} target="_blank" rel="noreferrer">
                <IconCode /> {t('projects.code')}
              </a>
              {project.liveLink && (
                <a className="btn btn--fill" href={project.liveLink} target="_blank" rel="noreferrer">
                  <IconLive /> {t('projects.live')}
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
