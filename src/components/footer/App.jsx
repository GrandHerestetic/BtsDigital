import React from "react";
import styles from "../footer/App.module.css";
import map from "../images/map.png"

const Footer = () => {
  return (
    <div className={styles.section}>
      <div className={styles.Head}>
      <div className={styles.title}>
        <h1>Контакты</h1>
        <p>
        г. Нур-Султан,<br></br> пр. Кошкарбаева 1/4,<br></br> БЦ DownTown, блок Dubai
        </p>
        <div className={styles.ContactEmail}><p><a href="">hello@btsdigital.kz</a></p></div>
      </div>
      <div className={styles.map}>
        <img src={map} alt="" />
      </div>
      </div>
      <div className={styles.Tale}>
        <a href="">Политика конфиденциальности</a>
        <ul>
          <li><a href="">en</a></li>
          <li><a href="">ru</a></li>
          <li><a href="">kz</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
