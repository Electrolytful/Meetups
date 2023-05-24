import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetups App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
