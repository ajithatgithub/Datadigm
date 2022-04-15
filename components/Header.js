import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Components/Header.module.css";

import Dropdown from "./Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <header className={styles.navbar} data-scroll>
      <nav className={styles.content}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.navbar_brand}>
              <h1>Datadigm</h1>
            </div>
            <div className={click ? styles.responsive : styles.navbar_menu}>
              <div className={styles.navbar_menu_item}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </div>
              <div className={styles.navbar_menu_item}>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </div>
              <div className={styles.navbar_menu_item}>
                <Link href="/about">
                  <div className={styles.dropdownSection}>
                    <Dropdown title="About" />
                  </div>
                </Link>
              </div>
              <div className={styles.navbar_menu_item}>
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </div>
            </div>
            <div>
              <a className={styles.icon} onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} size="1x" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
