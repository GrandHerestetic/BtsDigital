import React from "react";
import styles from "../vacation/App.module.css";

const Vacation = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h1>Начни менять мир <br></br> вместе с нами</h1>
        <p>
          BTS Digital - команда талантливых, смелых и ярких людей. Мы <br></br> работаем в
          атмосфере, которая располагает к созиданию и <br></br> творчеству. Вместе нам
          легко достигать высоких результатов.
        </p>
      </div>
      <div className={styles.vacationListBlock}>
      <h1>Новые вакансии</h1>
      <ul className={styles.vacationList}>
        <li>Главный IOS разработчик</li>
        <li>Главный IOS разработчик</li>
        <li>Главный IOS разработчик</li>
        <li>Главный IOS разработчик</li>
        <li>Главный IOS разработчик</li>
      </ul>
      </div>
    </div>
  );
};

export default Vacation;
