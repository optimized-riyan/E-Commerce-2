import React from 'react';
import { FaBars } from "react-icons/fa";
import styles from './NavDesign.module.css';

export default function NavBar() {

    return (
        <>
    <header> 
    <div className={styles.box}>
        <nav className={styles.navs}>
            <div className={styles.logo}>
              vitra.
            </div>
        
        <ul className={styles.navLink}>
            <li className={styles.lists}><a className={styles.alist} href="#">Home</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#" >About</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#">Contact</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#">Products</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#">Magazines</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#">Services</a></li>
            <li className={styles.lists}><a className={styles.alist} href="#">Professionals</a></li>

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

