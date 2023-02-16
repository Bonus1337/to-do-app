import Container from "../Container/Container";
import styles from "./NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <Link to="/">
            <i className="fa fa-list"></i>
          </Link>
          <ul className={styles.navlist}>
            <li className={styles.listitem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li className={styles.listitem}>
              <NavLink
                to="/favorite"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                Favorite
              </NavLink>
            </li>
            <li className={styles.listitem}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
              >
                about
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
