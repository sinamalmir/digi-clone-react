import React from 'react';

import "../style/mainSlider.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import slide1 from "../data/slider-1.jpeg"
import slide2 from "../data/slider-2.jpeg"
import slide6 from "../data/slider-6.jpeg"
import slide7 from "../data/slider-7.jpeg"
import slide8 from "../data/slider-8.jpeg"
import slide9 from "../data/slider-9.jpeg"
import slide10 from "../data/slider-10.jpeg"


const MainSlider = () => {


    return (
        <>
                
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={slide10} alt="" /></SwiperSlide>
        
    </Swiper>

         

        </>

    );
};

export default MainSlider;