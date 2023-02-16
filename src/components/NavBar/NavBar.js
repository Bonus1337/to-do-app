import Container from "../Container/Container";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.navbar}>
          <a href="/">
            <i className="fa fa-list"></i>
          </a>
          <ul className={styles.navlist}>
            <li className={styles.listitem}>
              <a href="/">Home</a>
            </li>
            <li className={styles.listitem}>
              <a href="/favorite">Favorite</a>
            </li>
            <li className={styles.listitem}>
              <a href="/about">about</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
