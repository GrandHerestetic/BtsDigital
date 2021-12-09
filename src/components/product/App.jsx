import React from "react";
import styles from "../product/App.module.css";
import styless from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ReactComponent as Dos } from "../images/dosmart.svg";

const Product = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h1>Продукты</h1>
        <p>2,6 миллиона пользователей уже выбрали нас</p>
      </div>
      <div className={styles.vacationListBlock}>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          // thumbWidth={40}
          centerMode={true}
          centerSlidePercentage={36}
        >
          <div className={styles.Slide}>
            <div className={styles.slideWrap}>
              <Dos className={styles.Img}/>
              <p>Шоппинг ассистент для выгодных <br></br> покупок</p>
            </div>
          </div>
          <div className={styles.Slide}>
          <div className={styles.slideWrap}>
              <Dos className={styles.Img}/>
              <p>Шоппинг ассистент для выгодных <br></br> покупок</p>
            </div>
          </div>
          <div className={styles.Slide}>
          <div className={styles.slideWrap}>
              <Dos className={styles.Img}/>
              <p>Шоппинг ассистент для выгодных <br></br> покупок</p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
