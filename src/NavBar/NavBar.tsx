import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';


export default function NavBar():JSX.Element{
    return (
        <nav className={styles.container}>
            <NavLink className={styles.link} to="user">User</NavLink>
            <NavLink className={styles.link} to="user2">User2</NavLink>
            <NavLink className={styles.link} to="user3">User3</NavLink>
        </nav>
    );
}