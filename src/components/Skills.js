import '../styles/skills.css';
import { useLang } from '../i18n/LanguageContext';

// Iconos servidos desde public/icons/. Antes eran 33 peticiones a jsDelivr
// e Iconify: si un CDN fallaba, la sección quedaba en blanco.
// La clave de cada categoría es la que se traduce en skills.categories.
const skillsData = {
  data: [
    ['Python', 'python'],
    ['Pandas', 'pandas'],
    ['NumPy', 'numpy'],
    ['scikit-learn', 'scikitlearn'],
    ['Matplotlib', 'matplotlib'],
    ['Jupyter', 'jupyter'],
    ['Anaconda', 'anaconda'],
  ],
  bi: [
    ['SQL', 'sql'],
    ['PostgreSQL', 'postgresql'],
    ['MySQL', 'mysql'],
    ['ClickHouse', 'clickhouse'],
    ['Power BI', 'powerbi'],
  ],
  languages: [
    ['Rust', 'rust'],
    ['JavaScript', 'javascript'],
    ['Java', 'java'],
    ['C#', 'csharp'],
    ['C', 'c'],
    ['Shell', 'bash'],
    ['Markdown', 'markdown'],
  ],
  web: [
    ['React', 'react'],
    ['React Router', 'reactrouter'],
    ['Node.js', 'nodejs'],
    ['Axios', 'axios'],
    ['HTML5', 'html5'],
    ['CSS3', 'css3'],
  ],
  testing: [
    ['Docker', 'docker'],
    ['pytest', 'pytest'],
    ['Jest', 'jest'],
    ['GitHub Actions', 'githubactions'],
    ['Vercel', 'vercel'],
    ['Render', 'render'],
  ],
  env: [
    ['Linux', 'linux'],
    ['Windows', 'windows'],
    ['macOS', 'macos'],
    ['Git', 'git'],
    ['GitHub', 'github'],
    ['Vim', 'vim'],
    ['Unity', 'unity'],
  ],
};

// Iconos monocromos: se invierten en modo oscuro para no quedar negro sobre negro.
const MONO = ['github', 'vercel', 'render', 'bash', 'markdown', 'macos', 'unity'];

function Skills() {
  const { t } = useLang();

  return (
    <div className="skills-section">
      {Object.entries(skillsData).map(([category, items]) => (
        <div key={category} className="skills-category">
          <h3 className="eyebrow">{t(`skills.categories.${category}`)}</h3>
          <div className="skills-grid">
            {items.map(([name, icon]) => (
              <div
                key={name}
                className="skill-icon-wrapper"
                tabIndex={0}
                role="img"
                aria-label={name}
              >
                <img
                  src={`/icons/${icon}.svg`}
                  alt=""
                  className={`skill-icon-rounded ${MONO.includes(icon) ? 'icon-adapt' : ''}`}
                />
                <span className="skill-tooltip">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
