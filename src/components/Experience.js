// src/components/Experience.js
import '../styles/experience.css';
import { useLang } from '../i18n/LanguageContext';

function Experience() {
  const { t } = useLang();
  const experienceData = t('experience.items');
  const educationData = t('experience.education');

  return (
    <section className="experience-section" id="experience">
      <h2 className="sec-title">{t('experience.experienceTitle')}</h2>

      <div className="experience-timeline">
        {experienceData.map((item, index) => (
          <article key={index} className="experience-card panel">
            <div className="experience-card-header">
              <div>
                <h3 className="experience-role">{item.role}</h3>
                {item.companyUrl ? (
                  <a
                    className="experience-company"
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.company}
                  </a>
                ) : (
                  <span className="experience-company">{item.company}</span>
                )}
                {item.location && (
                  <span className="experience-location"> — {item.location}</span>
                )}
              </div>
              <div className="experience-meta">
                <span className="experience-period">{item.period}</span>
                {item.type && <span className="chip chip--green">{item.type}</span>}
              </div>
            </div>

            {/* Una entrada puede traer varios bloques con su propio subtítulo
                (por ejemplo un curso por bloque) o una sola lista de bullets. */}
            {item.groups
              ? item.groups.map((group, g) => (
                  <div key={g}>
                    <h4 className="eyebrow eyebrow--green">{group.label}</h4>
                    <ul className="experience-bullets">
                      {group.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))
              : (
                <ul className="experience-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
          </article>
        ))}
      </div>

      <h2 className="sec-title">{t('experience.educationTitle')}</h2>
      <div className="experience-timeline">
        {educationData.map((item, index) => (
          <article key={index} className="experience-card panel">
            <div className="experience-card-header">
              <div>
                <h3 className="experience-role">{item.degree}</h3>
                {item.schoolUrl ? (
                  <a
                    className="experience-company"
                    href={item.schoolUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.school}
                  </a>
                ) : (
                  <span className="experience-company">{item.school}</span>
                )}
                {item.location && (
                  <span className="experience-location"> — {item.location}</span>
                )}
              </div>
              {item.period && (
                <div className="experience-meta">
                  <span className="experience-period">{item.period}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
