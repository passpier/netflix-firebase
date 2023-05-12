import React, { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { useRouter } from "next/router";

function Nav() {
  const [show, handleShow] = useState(false);
  const router = useRouter();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`${styles.nav}  ${show && styles.nav__black}`}>
      <div className={styles.nav__content}>
        <img
          className={styles.nav__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
        <img
          onClick={() => router.push("/profile")}
          className={styles.nav__avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
