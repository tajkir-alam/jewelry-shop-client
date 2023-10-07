import React from 'react';
import slider1 from '../../../assets/slider1.png';
import slider2 from '../../../assets/slider2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, } from "swiper";

const Banner = () => {
    return (
        <div className='md:h-[calc(100vh-100px)]'>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper lg:h-full"
            >
                <SwiperSlide>
                    <div className="relative">
                        <span className='absolute bg-gradient-to-r from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.6)] w-full h-full'></span>
                        <img src={slider1} loading="lazy" className='w-full' />
                        <span className='text-[#ffffffe3] absolute top-1/3 left-12 w-3/4 md:top-3/4 md:left-52 text-center text-3xl lg:text-7xl z-20'>
                            Welcome to The Jewelry Army
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <span className='absolute bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] w-full h-full'></span>
                        <img src={slider2} loading="lazy" className='w-full' />
                        <span className='text-[#ffffffe3] absolute top-1/3 left-12 w-3/4 md:top-3/4 md:left-52 text-center text-3xl lg:text-7xl z-20'>
                            Welcome to The Jewelry Army
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;