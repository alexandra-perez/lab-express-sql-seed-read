import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SongDetails.scss';

export default function SongDetails() {
  const API = import.meta.env.VITE_API_URL;
  const [song, setSong] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((resJSON) => setSong(resJSON));
    console.log(song);
  }, [id]);

  return (
    <div className="SongDetails">
      <h1>{song.name}</h1>
      <p>
        <i className="fa-solid fa-microphone-lines"></i> {song.artist}
      </p>
      <p>
        <i className="fa-solid fa-compact-disc"></i> {song.album}
      </p>
      <p>
        <i className="fa-solid fa-clock"></i> {song.time}
      </p>
    </div>
  );
}
