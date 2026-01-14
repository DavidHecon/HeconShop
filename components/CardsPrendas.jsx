'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from './Cards'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';


import './CardsPrendas.module.css';

// import required modules
import { FreeMode, Pagination, Navigation} from 'swiper/modules';

export default function App() {
  return (
    <section className="swiper-sección">
      <p className="swiper-txt">Streetwear T-Shirts</p>
      <Swiper
       slidesPerView="auto"
       navigation={true} 
    spaceBetween={70}
    freeMode={true}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination, Navigation]}
    className="mySwiper"
      >
        <SwiperSlide><Cards imageSrc="/img/mod1.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
        <SwiperSlide><Cards imageSrc="/img/mod2.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
        <SwiperSlide><Cards imageSrc="/img/mod3.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
        <SwiperSlide><Cards imageSrc="/img/mod4.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
        <SwiperSlide><Cards imageSrc="/img/mod5.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
        <SwiperSlide><Cards imageSrc="/img/mod6.jpg" name="Playera negra Guns N' Roses" price="MXN 479.00"/></SwiperSlide>
      </Swiper>
    </section>
  );
}
