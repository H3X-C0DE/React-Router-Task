import { Outlet, Link } from "react-router-dom";

// CSS specific to this component
import styles from "./layout.module.css";
// import idk from "../assets/image/idk.gif";
function LandingPage() {
  return (
    <div className={styles.app}>
      {/* header */}
      <header className={styles.navbar}>
        <Link className={styles.h1} to="/intentional-error">
          React-Router Attempt
        </Link>
        <nav className={styles.navLinks}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/Cats">
            Cats
          </Link>
          <Link className={styles.link} to="/Horse">
            Horse
          </Link>
        </nav>
      </header>
      {/* "subpages" goes here */}
      <main className={styles.grow}>
        <Outlet />
        {/* <div className={styles.imageBg}>
          <img src={idk} alt="" />
        </div> */}
      </main>

      {/* footer */}
      <footer className={styles.footer}>
        <h2 className={styles.footerText}>Eye Cancer made with love</h2>
      </footer>
    </div>
  );
}

export default LandingPage;
