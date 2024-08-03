import { Link } from 'react-router-dom';
import './Nav.scss';

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <Link to="/">
          <li className="logo">
            <i className="fa-solid fa-wave-square"></i> Tuner
          </li>
        </Link>
        <Link to="/songs">
          <li> My Songs</li>
        </Link>
        <Link to="/songs/new">
          <li>Add New Song</li>
        </Link>
      </ul>
    </nav>
  );
}
