import { Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <header>
                <div>Meetups App</div>
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
        </>
    )
}
