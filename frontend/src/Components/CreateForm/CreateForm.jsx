import { useState } from 'react';
import './CreateForm.scss';

export default function CreateForm() {
  const [newSong, setNewSong] = useState({});

  function createSong() {}

  function handleTextChange() {}

  function handleSubmit() {}

  return (
    <form className="CreateForm" onSubmit={handleSubmit}>
      <h1>Add a new Song</h1>
      <label htmlFor="songName">Title</label>
      <input type="text" id="songName" name="songName" />
      <br />
      <label htmlFor="songArtist">Artist</label>
      <input type="text" id="songArtist" name="songArtist" />
      <br />
      <label htmlFor="songAlbum">Album</label>
      <input type="text" id="songAlbum" name="songAlbum" />
      <br />
      <label htmlFor="songDuration">Duration</label>
      <input type="number" name="songDuration" id="songDuration" />
      <br />
      <div className="container">
        <label htmlFor="songIsFavorite">Add to favorites</label>
        <input type="checkbox" name="songIsFavorite" id="songIsFavorite" />
      </div>
      <button>Add song</button>
    </form>
  );
}
