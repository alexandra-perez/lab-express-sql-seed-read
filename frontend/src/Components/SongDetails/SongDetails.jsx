import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './SongDetails.scss';

export default function SongDetails() {
  const API = import.meta.env.VITE_API_URL;
  const [song, setSong] = useState({});

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((resJSON) => setSong(resJSON));
  }, [id]);

  function deleteSong() {
    fetch(`${API}/songs/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(song),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/songs');
      })
      .catch((error) => console.error(error));
  }

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
      <div className="buttons-container">
        <Link to={`/songs/${id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={deleteSong}>Delete</button>
      </div>
    </div>
  );
}
