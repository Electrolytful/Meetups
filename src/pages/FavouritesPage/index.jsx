import { useFavourites } from "../../context/favouritesContext";
import { MeetupList } from '../../components';
import styles from './index.module.css';

export default function FavouritesPage() {
    const favouritesCtx = useFavourites();

    return <section>
        <h1>My Favourites</h1>
        {favouritesCtx.totalFavourites ? <MeetupList meetups={favouritesCtx.favourites} /> : <p className={styles.empty}>You're favourites seems empty. Try adding some.</p>}
    </section>
}
