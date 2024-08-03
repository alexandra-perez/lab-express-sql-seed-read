import './SongCard.scss';

export default function SongCard() {
  return (
    <div className="SongCard">
      <h1>Imagine</h1>
      <div className="container">
        <p>
          <i className="fa-solid fa-microphone-lines"></i> John Lennon
        </p>
        <p>
          <i className="fa-solid fa-compact-disc"></i> Imagine
        </p>
        <p>
          <i className="fa-solid fa-clock"></i> 3:03
        </p>
        <p></p>
      </div>
    </div>
  );
}
