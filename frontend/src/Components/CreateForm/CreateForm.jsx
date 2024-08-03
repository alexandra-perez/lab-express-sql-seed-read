import './CreateForm.scss';

export default function CreateForm() {
  return (
    <form className="CreateForm">
      <label htmlFor="songName"> Song Name</label>
      <input type="text" id="songName" name="songName" />
      <label htmlFor="songArtist"> Song Artist</label>
      <input type="text" id="songArtist" name="songArtist" />
    </form>
  );
}
