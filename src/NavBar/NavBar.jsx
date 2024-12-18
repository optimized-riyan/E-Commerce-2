import React from 'react';
import { FaBars } from "react-icons/fa";
import styles from './NavDesign.module.css';

export default function NavBar() {

    return (
        <>
    <header> 
    <div className={styles.box}>
        <nav>
            <div className={styles.logo}>
                <h1 className={styles.logoInside}>Vitra.</h1>
            </div>
        
        <ul className={styles.navLink}>
            <li><a href="#">Home</a></li>
            <li><a href="#" >About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Magazines</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Proffesionals</a></li>

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

