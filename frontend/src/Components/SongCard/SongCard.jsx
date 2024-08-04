import './SongCard.scss';

export default function SongCard({song}) {
  return (
    <div className="SongCard">
      <h1>{song.name}</h1>
      <div className="container">
        <p>
          <i className="fa-solid fa-microphone-lines"></i> {song.artist}
        </p>
        <p>
          <i className="fa-solid fa-compact-disc"></i> {song.album}
        </p>
        <p>
          <i className="fa-solid fa-clock"></i> {song.time}
        </p>
        <p></p>
      </div>
    </div>
  );
}
