import { useState, useEffect } from 'react';
import '../styles/DiscordStatus.css';
import { useLang } from '../i18n/LanguageContext';

// Arte de Captain Rex por grantgoboom (deviantart.com/grantgoboom/art/Rex-119528260).
const AVATAR = 'https://i.imgur.com/O3Lulcc.jpeg';

// Rotación de "escuchando". Los datos no se traducen: son títulos de canción.
const playlist = [
  { song: 'Wake Me Up', artist: 'Avicii', art: 'https://cdn-images.dzcdn.net/images/cover/ec97306735b46ec334e0ce562290775b/500x500.jpg' },
  { song: 'The Nights', artist: 'Avicii', art: 'https://cdn-images.dzcdn.net/images/cover/8c15c7b18a19d4c4421d8252a3d84456/0x1900-000000-80-0-0.jpg' },
  { song: 'Ho Hey', artist: 'The Lumineers', art: 'https://cdn-images.dzcdn.net/images/cover/5feedc5f17581c7553a777bbb220fe02/1900x1900-000000-80-0-0.jpg' },
  { song: 'Boulevard of Broken Dreams', artist: 'Green Day', art: 'https://cdn-images.dzcdn.net/images/cover/82473dde6be27d6b576d5a4a8dfb5c83/500x500.jpg' },
  { song: '21 Guns', artist: 'Green Day', art: 'https://cdn-images.dzcdn.net/images/cover/9e17c202b5ab081171f31c81eb32dc5d/1900x1900-000000-80-0-0.jpg' },
  { song: 'Iris', artist: 'The Goo Goo Dolls', art: 'https://cdn-images.dzcdn.net/images/cover/b40c98d46b05e0f78814ac23327db4b7/1900x1900-000000-80-0-0.jpg' },
  { song: 'Hurt', artist: 'Johnny Cash', art: 'https://cdn-images.dzcdn.net/images/cover/3ee70b0cf1729759dbe18934ea34c8c1/1900x1900-000000-80-0-0.jpg' },
  { song: 'Take Me Home, Country Roads', artist: 'John Denver', art: 'https://cdn-images.dzcdn.net/images/cover/6d9901f5f7527a21314513589cd6e569/1900x1900-000000-80-0-0.jpg' },
  { song: 'Good Riddance', artist: 'Green Day', art: 'https://cdns-images.dzcdn.net/images/cover/8cd4171fbf80c3b8df26b0690b11eb86/1900x1900-000000-80-0-0.jpg' },
  { song: 'Gone, Gone, Gone', artist: 'Phillip Phillips', art: 'https://cdn-images.dzcdn.net/images/cover/d227a9ffa72128f062b2574b0df68425/1900x1900-000000-80-0-0.jpg' },
];

// No se traducen: los tres son nombres propios en los dos idiomas.
const ROLES = ['Linux', 'Open Source', 'Star Wars'];
const GITHUB = 'https://github.com/poncho-ajmv';
const DISCORD_USER = 'https://discord.com/users/957722095381540874';

function DiscordStatus() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * playlist.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const track = playlist[index];

  return (
    <aside className="discord-profile panel">
      <div className="banner-gif" />

      <div className="profile-container">
        {/* Avatar montado sobre el banner, con el quote en burbuja al lado. */}
        <div className="note-bubble">
          <div className="note-avatar-wrapper">
            <img
              className="note-avatar"
              src={AVATAR}
              alt=""
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/avatar.png';
              }}
            />
            <span className="status-circle" />
          </div>
          <div className="note-content">
            <p className="note-text">{t('discord.note')}</p>
          </div>
        </div>

        <div className="profile-info">
          <h3>poncho_ajmv</h3>
          <p className="tag">@poncho_ajmv</p>
          <p className="playing">
            {t('discord.playing')} <strong>GNU/Linux</strong>
          </p>
        </div>

        {/* key={index}: al cambiar de canción React reemplaza el nodo y la
            animación de entrada se vuelve a disparar. */}
        <div className="spotify-widget fade-in" key={index}>
          <img src={track.art} alt="" className="album-art" />
          <div className="song-info">
            <p className="song">{track.song}</p>
            <p className="artist">{track.artist}</p>
          </div>
        </div>

        <div className="discord-section">
          <h4 className="eyebrow">{t('discord.aboutMe')}</h4>
          {t('discord.aboutLines').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <p className="external-link">
            <a href={GITHUB} target="_blank" rel="noreferrer">github.com/poncho-ajmv</a>
          </p>
          <p className="sic-parvis">{t('discord.sicParvis')}</p>
        </div>

        <div className="discord-section">
          <h4 className="eyebrow">{t('discord.memberSince')}</h4>
          <div className="joined">
            <img src="/icons/discord.svg" alt="" className="icon-inline" />
            <span>{t('discord.joinedAt')}</span>
          </div>
        </div>

        <div className="discord-section">
          <h4 className="eyebrow">{t('discord.rolesLabel')}</h4>
          <div className="roles">
            {ROLES.map((role, i) => (
              <span key={role} className={`role-pill color-${i % 2}`}>{role}</span>
            ))}
          </div>
        </div>

        <form action={DISCORD_USER} method="get" target="_blank" className="message-box">
          <input
            type="text"
            placeholder={`${t('discord.messagePrefix')} @poncho_ajmv`}
            aria-label={t('discord.messagePrefix')}
          />
          <button type="submit" aria-label={t('discord.send')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
}

export default DiscordStatus;
