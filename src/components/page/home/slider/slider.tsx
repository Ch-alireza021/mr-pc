"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import pic1 from "@/assets/image/Exo Fractal cases slider pc v1 copy-1600x400_Object Removal.jpg";
import pic2 from "@/assets/image/Exo Prebuild system Pro pc v1 copy 2-1600x400_Object Removal.jpg";
import pic3 from "@/assets/image/Gaming chair slider pc v1 copy 2-1600x400.jpg";
import pic4 from "@/assets/image/Razer all slider pc v1 copy 2-1600x400_Object Removal.jpg";
import './styles.css';

import {  Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Box from '@mui/material/Box';
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  return (
    <>
      <Swiper
       autoplay={{
        delay: 5000,
        disableOnInteraction: false, 
      }}
        modules={[Pagination]}
        pagination={{
            clickable: true,
          }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={pic1} alt="" width={1600} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic2} alt="" width={1600} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic3} alt="" width={1600} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={pic4} alt="" width={1600} height={400} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
