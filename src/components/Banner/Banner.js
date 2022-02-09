import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../../asset/images/image1.jpg';
import image2 from '../../asset/images/image2.png';
import image3 from '../../asset/images/image3.jpg';
import image4 from '../../asset/images/image4.jpg';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Pagination, Autoplay]);
const Banner = () => {
    return (
        <div className="banner">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                slidesPerGroup={2}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 6,
                    },

                    769: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
