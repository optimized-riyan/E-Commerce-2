import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./NavDesign.module.css";
import { Link } from "react-router-dom";
import UserContext from '../UserContext';

export default function NavBar() {
    const {user} = useContext(UserContext);

  return (
    <>
      <header>
        <div className={styles.box}>
          <nav className={styles.navs}>
            <div className={styles.logo}>
              <img src="src/NavBar/logo.png" alt="" height="50px" />
            </div>

            <ul className={styles.navLink}>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/'}>
                  Home
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/products'}>
                  Products
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/profile'}>
                  Profile
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/cart'}>
                  Cart
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/about'}>
                  About
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={'/contactus'}>
                  Contact
                </Link>
              </li>
              {!(user.firstName) && (
                <li className={styles.lists}>
                    <Link className={styles.alist} to={'/login'}>
                    Login
                    </Link>
                </li>
              )}
            </ul>
            <div className={styles.icon}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
