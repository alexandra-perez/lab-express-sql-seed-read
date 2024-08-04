import './Searchbar.scss';

export default function Searchbar() {
  return (
    <form className="Searchbar">
      <input type="text" placeholder="Find a song" />
      <button>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}
