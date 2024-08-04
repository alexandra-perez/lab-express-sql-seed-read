import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './EditForm.scss';

export default function EditForm() {
  const [currentSong, setCurrentSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: '',
  });
  const API = import.meta.env.VITE_API_URL;
  let { id } = useParams();
    const navigate = useNavigate();


  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => setCurrentSong(resJSON))
      .then((resJSON) => console.log('currentSong =', currentSong))
      .catch((error) => console.error(error));
  }, []);

  function handleTextChange(e) {
    setCurrentSong({ ...currentSong, [e.target.id]: e.target.value });
  }

  function updateSong() {
    fetch(`${API}/songs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(currentSong),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((error) => console.error(error));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateSong();
    setCurrentSong({
      name: '',
      artist: '',
      album: '',
      time: '',
      is_favorite: '',
    });
  }

  return (
    <div className="EditForm">
      <h1>Edit song</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="name"
          name="name"
          value={currentSong.name}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={currentSong.artist}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="album">Album</label>
        <input
          type="text"
          id="album"
          name="album"
          value={currentSong.album}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="time">Duration</label>
        <input
          type="text"
          name="time"
          id="time"
          value={currentSong.time}
          onChange={handleTextChange}
        />
        <br />
        <div className="container">
          <label htmlFor="is_favorite">Favorite</label>
          <input
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            checked={currentSong.is_favorite}
            onChange={handleTextChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
