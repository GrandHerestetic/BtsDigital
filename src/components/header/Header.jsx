import React from "react";
import styles from '../header/Header.module.css';
import { ReactComponent as Logo } from "../images/logo-main.svg";

const Header = () => {
  return(
    <div className={styles.Header}>
        <div className={styles.LeftSide}>
          <a href="">
            <Logo/>
          </a>
          <ul>
            <li>Продукты</li>
            <li>Партнерам</li>
            <li>О нас</li>
            <li>Карьера</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className={styles.RightSide}>
          <ul>
            <li>en</li>
            <li>ru</li>
            <li>kz</li>
          </ul>
        </div>
    </div>
  )
}

export default Header