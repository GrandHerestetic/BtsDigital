import React from "react";
import styles from "../team/App.module.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Dos } from "../images/dosmart.svg";
import First from "../images/team-1.jpg";

const Team = () => {
  return (
    <div className={styles.bgColor}>
      <div className={styles.carouselWrap}>
      <Carousel
        className={styles.carousel}
        showArrows={false}
        showStatus={false}
        swipeable
      >
        <div className={styles.carouselItem}>
          <div className={styles.caril}>
            <div className={styles.carouselContent}>
              <h3>Команда</h3>
              <div className={styles.mainText}>
                <div className={styles.smallText}>
                  Ислам Талапбаев <br></br>
                Product manager Dosmart
                </div>
                </div>
            <div className={styles.smallText}>Привет! Я работаю с супер умной, открытой к самым дерзким вызовам командой! Наша цель - строить прозрачные инструменты, помогающие нашим гражданам совершать самые выгодные покупки.</div>
            <div className={styles.smallText}>
            В нашей команде мы ценим самостоятельность и лидерство. Каждый член команды полностью управляет своим временем, своими задачами и максимально заряжен нашей общей целью.
            </div>
            </div>
          </div>
          <div className={styles.caril}>
            <img src={"https://btsdigital.kz/images/team-9.png"} />
          </div>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className={styles.carouselItem}>
          <div className={styles.caril}>
            <div className={styles.carouselContent}>
              <h3>Команда</h3>
              <div className={styles.mainText}>
                <div className={styles.smallText}>
                  Ислам Талапбаев <br></br>
                Product manager Dosmart
                </div>
                </div>
            <div className={styles.smallText}>Привет! Я работаю с супер умной, открытой к самым дерзким вызовам командой! Наша цель - строить прозрачные инструменты, помогающие нашим гражданам совершать самые выгодные покупки.</div>
            <div className={styles.smallText}>
            В нашей команде мы ценим самостоятельность и лидерство. Каждый член команды полностью управляет своим временем, своими задачами и максимально заряжен нашей общей целью.
            </div>
            </div>
          </div>
          <div className={styles.caril}>
            <img src={"https://btsdigital.kz/images/team-9.png"} />
          </div>
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </div>
    </div>
  );
};

export default Team;
