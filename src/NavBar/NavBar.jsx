import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import styles from "./NavDesign.module.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handlelogoClick = () => {
    navigate("");
  };
  return (
    <>
      <header>
        <div className={styles.box}>
          <nav className={styles.navs}>
            <div className={styles.logo}>
              <button
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                  padding: "0",
                  margin: "0",
                }}
                onClick={handlelogoClick}
              >
                <img src="src/NavBar/logo.png" style={{ cursor: 'pointer' }} alt="" height="50px" />
              </button>
            </div>

            <ul className={styles.navLink}>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/"}>
                  Home
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/products"}>
                  Products
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/profile"}>
                  Profile
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/cart"}>
                  Cart
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/about"}>
                  About
                </Link>
              </li>
              <li className={styles.lists}>
                <Link className={styles.alist} to={"/contactus"}>
                  Contact
                </Link>
              </li>
              {!user.firstName ? (
                <li className={styles.lists}>
                  <Link className={styles.alist} to={"/login"}>
                    Login
                  </Link>
                </li>
              ) : (
                <li className={`${styles.lists} ${styles.alist}`} style={{ cursor: 'pointer' }}
                    onClick={() => {
                        localStorage.removeItem('user');
                        setUser(undefined);
                        navigate('/login');
                    }}
                >
                    Logout
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
