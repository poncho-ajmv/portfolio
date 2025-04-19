import '../styles/socials.css';
import { useState } from 'react';

function Socials() {
  const email = "alfonsojmoragav@gmail.com";
  const [copied, setCopied] = useState(false);
  const [ setHovered] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="footer contact-footer">
      <h2 className="contact-title">SOCIALS <span className="at-icon">@</span></h2>
      <p className="contact-subtitle">{'> Insert coin to connect.'}</p>


      <div className="contact-grid">
        <a className="contact-box linkedin" href="https://linkedin.com/in/poncho-ajmv" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="icon" /> Linkedin
        </a>
        <a className="contact-box github" href="https://github.com/poncho-ajmv" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" /> Github
        </a>
        <a className="contact-box discord" href="https://discord.com/users/957722095381540874" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="Discord" className="icon" /> Discord
        </a>
      </div>

      <h4 className="email-heading">📬 Send me an email 📬</h4>
      <div className="footer-form-style">
        <input type="text" value={email} disabled />
        <a href={`mailto:${email}`} className="icon-button" >&gt;</a>
        <div
          className="tooltip-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={copyToClipboard}
        >
         <button className="icon-button">{copied ? '[OK]' : '[COPY]'}</button>

          
        </div>
      </div>
    </footer>
  );
}

export default Socials;
