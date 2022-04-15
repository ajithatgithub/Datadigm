import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Components/Dropdown.module.css";

const Dropdown = ({ title }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={styles.title} onMouseOver={handleShow}>
        {title}
      </div>
      <div
        className={show ? styles.dropdownOpen : styles.dropdown}
        onMouseOut={handleShow}
      >
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem} onClick={handleShow}>
            <Link href="/about">
              <a>Why Datadigm</a>
            </Link>
          </li>
          <li className={styles.dropdownItem} onClick={handleShow}>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li className={styles.dropdownItem} onClick={handleShow}>
            <Link href="/posts">
              <a>Case Studies</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
