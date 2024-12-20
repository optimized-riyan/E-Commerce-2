import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import styles from "./FooterDesign.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksDiv}>
            <h4 className={styles.heading}>Products</h4>
            <a href="#">
              <p className={styles.para}>All Products</p>
            </a>
            <a href="#">
              <p className={styles.para}>New Products</p>
            </a>
            <a href="#">
              <p className={styles.para}>Manufacturer Warranty</p>
            </a>
            <a href="#">
              <p className={styles.para}>Colours & Materials</p>
            </a>
          </div>
          <div className={styles.footerLinksDiv}>
            <h4 className={styles.heading}>Contact</h4>
            <a href="#">
              <p className={styles.para}>Contact LuxeLiving</p>
            </a>
            <a href="#">
              <p className={styles.para}>Find LuxeLiving</p>
            </a>
            <a href="#">
              <p className={styles.para}>Subscribe to the newsletter</p>
            </a>
          </div>
          <div className={styles.footerLinksDiv}>
            <h4 className={styles.heading}>Legal</h4>
            <a href="#">
              <p className={styles.para}>Privacy Policies</p>
            </a>
            <a href="#">
              <p className={styles.para}>Distribution Rights</p>
            </a>
            <a href="#">
              <p className={styles.para}>Terms & Conditions</p>
            </a>
          </div>
          <div className={styles.footerLinksDiv}>
            <h4 className={styles.heading}>About LuxeLiving</h4>
            <a href="#">
              <p className={styles.para}>LuxeLiving Campus</p>
            </a>
          </div>

          <div className={styles.footerLinksDiv}>
            <h4 className={styles.heading}>Follow Us</h4>
            <div className={styles.socialMedia}>
              <div className={styles.icon}>
                <FaFacebook />
              </div>
              <div className={styles.icon}>
                <AiFillTwitterCircle />
              </div>
              <div className={styles.icon}>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className={styles.footerCopyright}>
          <p className={styles.copyright}>COPYRIGHT © 2024 LUXELIVING INTERNATIONAL AG. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;