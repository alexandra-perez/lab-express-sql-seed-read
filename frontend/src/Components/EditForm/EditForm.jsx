import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => setCurrentSong(resJSON))
      .then((resJSON) => console.log('currentSong =', currentSong))
      .catch((error) => console.error(error));
  }, []);

  function handleTextChange(e) {}

  function handleSubmit(e) {}

  return (
    <div className="EditForm">
      <h1>Edit song</h1>
      <form>
        <label htmlFor="name">Title</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="artist">Artist</label>
        <input type="text" id="artist" name="artist" />
        <br />
        <label htmlFor="album">Album</label>
        <input type="text" id="album" name="album" />
        <br />
        <label htmlFor="time">Duration</label>
        <input type="number" name="time" id="time" />
        <br />
        <div className="container">
          <label htmlFor="is_favorite">Favorite</label>
          <input type="checkbox" name="is_favorite" id="is_favorite" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
