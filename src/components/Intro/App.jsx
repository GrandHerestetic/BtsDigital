import React from "react";

import styles from "../Intro/App.module.css";
import { ReactComponent as IntroLogo } from "../images/pix.svg";

const FirstPanel = () => {
  return (
    <div className={styles.section}>
      <div className={styles.leftSide}>
        <h1>Мы создаем цифровые решения, меняющие жизнь людей к лучшему</h1>
        <p>
          Компания BTS Digital создает цифровые продукты и сервисы, которые
          помогают людям в повседневной жизни.
        </p>
        <p>
          В экосистеме Aitu представлены проекты для жизни общества, ведения
          бизнеса и госуправления. Искусственный интеллект и Big Data - то, с
          чем в BTSD работают каждый день. Разработки компании актуальны на
          мировом рынке.
        </p>
        <div className={styles.sectionButton}>
          <a href="" className={styles.IntroButton}>
            Подать резюме
          </a>
        </div>
      </div>
      <div className={styles.rightSide}>
        <IntroLogo />
      </div>
    </div>
  );
};

export default FirstPanel;
