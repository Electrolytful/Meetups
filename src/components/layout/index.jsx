import styles from './index.module.css';
import Navbar from './Navbar';


export default function Layout({ children }) {
    return <div>
        <Navbar />
        <main className={styles.main}>
            {children}
        </main>
    </div>
}
