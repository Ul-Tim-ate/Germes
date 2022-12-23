import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { A11y, Navigation } from "swiper";
import styles from "../styles/product-swiper.module.sass";
import Image from "next/image";
import changeSlide from "../public/change-slide.svg";
import { useState } from "react";

const NextButton = ({ swiper }: { swiper: any }) => {
  if (!swiper?.enabled) {
    return <></>;
  }
  return (
    <Image
      src={changeSlide}
      alt="Предыдущий слайд"
      className={styles.productSwiperNext}
      onClick={() => swiper.slideNext()}
    />
  );
};

const PrevButton = ({ swiper }: { swiper: any }) => {
  if (!swiper?.enabled) {
    return <></>;
  }
  return (
    <Image
      src={changeSlide}
      alt="Предыдущий слайд"
      className={styles.productSwiperPrev}
      onClick={() => swiper.slidePrev()}
    />
  );
};

const ProductSwiper = () => {
  const [swiper, setSwiper] = useState<any>();
  return (
    <div className={styles.productSwiper}>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        <SwiperSlide>
          <div className={styles.productSwiperSlide}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.productSwiperSlide}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.productSwiperSlide}></div>
        </SwiperSlide>
      </Swiper>
      <NextButton swiper={swiper} />
      <PrevButton swiper={swiper} />
    </div>
  );
};

export default ProductSwiper;
