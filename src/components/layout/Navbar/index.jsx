import { Link } from 'react-router-dom';
import { useFavourites } from '../../../context/favouritesContext';
import styles from './index.module.css';


export default function Navbar() {
  const favouritesCtx = useFavourites();

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
            <Link to="/favourites">
              My Favourites
              <span className={styles.badge}>{favouritesCtx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
