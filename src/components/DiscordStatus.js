import { useState, useEffect } from 'react';
import '../styles/DiscordStatus.css';


const spotifyPlaylist = [
  {
    track_id: '1',
    song: 'Wake Me Up',
    artist: 'Avicii',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/ec97306735b46ec334e0ce562290775b/500x500.jpg',
    album: 'True'
  },
  {
    track_id: '2',
    song: 'The Nights',
    artist: 'Avicii',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/8c15c7b18a19d4c4421d8252a3d84456/0x1900-000000-80-0-0.jpg',
    album: 'The Days / Nights'
  },
  {
    track_id: '3',
    song: 'Ho Hey',
    artist: 'The Lumineers',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/5feedc5f17581c7553a777bbb220fe02/1900x1900-000000-80-0-0.jpg',
    album: 'The Lumineers'
  },
  {
    track_id: '4',
    song: 'Boulevard of \nBroken Dreams',
    artist: 'Green Day',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/82473dde6be27d6b576d5a4a8dfb5c83/500x500.jpg',
    album: 'American Idiot'
  },
  {
    track_id: '5',
    song: '21 Guns',
    artist: 'Green Day',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/9e17c202b5ab081171f31c81eb32dc5d/1900x1900-000000-80-0-0.jpg',
    album: '21st Century Breakdown'
  },
  {
    track_id: '6',
    song: 'Iris',
    artist: 'The Goo Goo \nDolls',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/b40c98d46b05e0f78814ac23327db4b7/1900x1900-000000-80-0-0.jpg',
    album: 'Dizzy Up the Girl'
  },
  {
    track_id: '8',
    song: 'Hurt',
    artist: 'Johnny Cash',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/3ee70b0cf1729759dbe18934ea34c8c1/1900x1900-000000-80-0-0.jpg',
    album: 'American IV: The Man Comes Around'
  },
  {
    track_id: '9',
    song: 'Take Me Home, \nCountry Roads',
    artist: 'John Denver',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/6d9901f5f7527a21314513589cd6e569/1900x1900-000000-80-0-0.jpg',
    album: 'Poems, Prayers & Promises'
  },
  {
    track_id: '10',
    song: 'Good Riddance',
    artist: 'Green Day',
    album_art_url: 'https://cdns-images.dzcdn.net/images/cover/8cd4171fbf80c3b8df26b0690b11eb86/1900x1900-000000-80-0-0.jpg',
    album: 'Nimrod'
  },
  {
    track_id: '11',
    song: 'Gone, Gone, Gone',
    artist: 'Phillip Phillips',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/d227a9ffa72128f062b2574b0df68425/1900x1900-000000-80-0-0.jpg',
    album: 'The World from the Side of the Moon'
  },
  {
    track_id: '12',
    song: 'Dark Aria',
    artist: 'Swano Hiroyuki',
    album_art_url: 'https://cdn-images.dzcdn.net/images/cover/4f754ded7e6ef6309d8136c01ede7a7c/1900x1900-000000-80-0-0.jpg',
    album: 'Dark Aria - Single'
  }
];
function DiscordStatus() {
  const [, setCurrentTrack] = useState(0);

  const [user, setUser] = useState({
    discord_user: {
      username: 'poncho_ajmv',
      tag: '@poncho_ajmv',
      avatar: 'https://i.imgur.com/O3Lulcc.jpeg'
    },
    discord_status: 'online',
    listening_to_spotify: true,
    spotify: spotifyPlaylist[0],
    activities: [
      { name: 'GNU/Linux', type: 0 }
    ],
    joined_at: 'Jan 3, 2018',
    roles: ['Linux', 'React', 'Engineering Student'],
    note: "I'm one with the Force and the Force is with me."
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * spotifyPlaylist.length);
      setCurrentTrack(randomIndex);
      setUser(prevUser => ({
        ...prevUser,
        spotify: spotifyPlaylist[randomIndex]
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="discord-profile">
      <div className="banner-gif"></div>
      <div className="profile-container">
        
        {/* 💬 Discord message-style bubble (solo este avatar) */}
        <div className="note-bubble">
          <div className="note-avatar-wrapper">
            <img className="note-avatar" src={user.discord_user.avatar} alt="avatar" />
            <div className="status-circle"></div>
          </div>
          <div className="note-content">
            <p className="note-text">{user.note}</p>
          </div>
        </div>

        <div className="profile-info">
          <h3>{user.discord_user.username}</h3>
          <p className="tag">{user.discord_user.tag}</p>

          {user.activities.length > 0 && (
            <p className="playing">🎮 Playing <strong>{user.activities[0].name}</strong></p>
          )}

          {user.listening_to_spotify && (
            <div className="spotify-widget fade-in">
              <img src={user.spotify.album_art_url} alt="album art" className="album-art" />
              <div className="song-info">
                <p className="song">{user.spotify.song}</p>
                <p className="artist">{user.spotify.artist}</p>
              </div>
            </div>
          )}

        <div className="about-me">
          <p><strong>ABOUT ME</strong></p>
          <p>⌨️ Systems Engineering student </p>
          <p>💻 Focused on OS, security, and tech business.</p>
          <p>🐧 Guided by the Force, Linux,</p>
          <p>and the open-source way.</p>
          
          <p>◌ Sic Parvis Magna ◌</p>
            <p className="external-link">
              🔗 <a href="https://github.com/poncho-ajmv" target="_blank" rel="noreferrer">https://github.com/poncho-ajmv</a>
            </p>
          </div>



          <div className="extra-info">
            <p><strong>MEMBER SINCE</strong></p>
            <div className="joined">
            <img
              src="https://skillicons.dev/icons?i=discord"
              alt="discord icon"
              className="icon-inline"
            />
            <span>{user.joined_at}</span>
          </div>


            <p><strong>ROLES</strong></p>
            <div className="roles">
              {user.roles.map((role, i) => (
                <span className={`role-pill color-${i}`} key={i}>{role}</span>
              ))}
            </div>

            <form action="https://discord.com/users/957722095381540874" method="get" target="_blank" className="message-box">
              <input type="text" placeholder={`Message ${user.discord_user.tag}`} />
              <button type="submit" aria-label="Send">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscordStatus;
