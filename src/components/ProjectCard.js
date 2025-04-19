// src/components/ProjectCard.js
import '../styles/ProjectCard.css';

export default function ProjectCard({ darkMode }) {
  const projects = [
    {
      image: "/FILMFANATIC.png",
      title: "Film Fanatic",
      description:
        "Movie browser built with the TMDB API. Search, explore, and view real-time information in a sleek and responsive UI.",
      techIcons: "https://skillicons.dev/icons?i=react,js,html,css",
      liveLink: "https://film-fanatic-eta.vercel.app",
      codeLink: "https://github.com/poncho-ajmv/FilmFanatic",
    },
    {
      image: "/Lexico.png",
      title: "Lexical Analyzer",
      description:
        "Educational React-based tool for lexical analysis using basic automata theory and token parsing.",
      techIcons: "https://skillicons.dev/icons?i=react,js,html,css",
      liveLink: "https://analizador-lexico-web.vercel.app/",
      codeLink: "https://github.com/poncho-ajmv/analizador-lexico-web",
    },
    {
      image: "/sf.png",
      title: "Metaheuristics with Python",
      description:
        "Repository featuring optimization algorithms like Simulated Annealing and Local Search, applied to Python problems.",
      techIcons: "https://skillicons.dev/icons?i=python,jupyter",
      liveLink: null,
      codeLink: "https://github.com/poncho-ajmv/Metaheurisitcas_With_Python",
    },
    {
      image: "/GUI.png",
      title: "Expression Evaluator GUI",
      description:
        "Java GUI application that interprets and evaluates infix expressions. Ideal for visualizing mathematical processes.",
      techIcons: "https://skillicons.dev/icons?i=java",
      liveLink: null,
      codeLink: "https://github.com/poncho-ajmv/EvaluadorExpresionesGUI",
    },
  ];

  return (
    <section
      id="projects"
      className={`project-section ${darkMode ? 'dark' : 'light'}`}
      style={{ padding: '2rem 0', fontFamily: 'Fira Code, monospace' }}
    >
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-wrapper"
            style={{ maxWidth: '580px', marginBottom: '1.6rem' }}
          >
            <div className="project-image-box">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '160px', objectFit: 'cover' }}
              />
            </div>

            <div className="project-content-box">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-icons">
                <img src={project.techIcons} alt="Tech stack icons" />
              </div>

              <div className="buttons" style={{ fontFamily: 'Fira Code, monospace' }}>
                <a
                  href={project.codeLink}
                  className="btn dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l5-3-5-3v6zm-8 5h20V4H2v16zM4 6h16v12H4V6z" />
                  </svg>
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="btn dark live-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <svg
                      className="link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5zm5.1 1h6v-2h-6v2zm6-6h3a5 5 0 1 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V7z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 
