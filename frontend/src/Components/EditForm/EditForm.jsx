export default function EditForm() {
  return (
    <div className="EditForm">
      <h1>Edit song</h1>
      <form>
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
          <label htmlFor="songIsFavorite">Favorite</label>
          <input type="checkbox" name="songIsFavorite" id="songIsFavorite" />
        </div>
        <button>Add song</button>
      </form>
    </div>
  );
}
