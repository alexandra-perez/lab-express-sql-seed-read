import Searchbar from '../../Components/Searchbar/Searchbar';
import SongCard from '../../Components/SongCard/SongCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Index.scss';

export default function Index() {
  const API = import.meta.env.VITE_API_URL;

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`)
      .then((res) => res.json())
      .then((resJSON) => {
        setSongs(resJSON);
        // console.log(songs)
      });
  }, []);

  return (
    <div className="Index">
      <Searchbar />
      {songs.map((song) => {
        return <SongCard key={song.id} song={song} />;
      })}
    </div>
  );
}
