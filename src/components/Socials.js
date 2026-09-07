import '../styles/socials.css';
import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

function Socials() {
  const { t } = useLang();
  const email = 'alfonsojmoragav@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="contact-footer">
      <h2 className="contact-title">{t('socials.title')} @</h2>
      <p className="contact-subtitle">
        <span className="prompt">&gt;</span> {t('socials.subtitle')}
      </p>

      <div className="contact-grid">
        <a
          className="contact-box"
          href="https://www.linkedin.com/in/alfonso-javier-moraga-videz-92b8211bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="" className="icon" />
          Linkedin
        </a>
        <a className="contact-box" href="https://github.com/poncho-ajmv" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" alt="" className="icon icon-adapt" />
          Github
        </a>
        <a
          className="contact-box"
          href="https://discord.com/users/957722095381540874"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/icons/discord.svg" alt="" className="icon" />
          Discord
        </a>
      </div>

      <h4 className="email-heading">{t('socials.emailHeading')}</h4>

      <div className="footer-form-style">
        <input value={email} readOnly aria-label={t('socials.emailLabel')} />
        <a href={`mailto:${email}`} className="icon-button" aria-label={t('socials.emailLabel')}>
          &gt;
        </a>
        <div className="copy-row">
          <button type="button" className="icon-button" onClick={copyToClipboard}>
            {copied ? t('socials.copied') : t('socials.copy')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Socials;
