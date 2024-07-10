import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import SwiperComponent from '../../../Components/Swiper';
import swiper1 from "../../../assets/homepage/government/1.png";
import swiper2 from "../../../assets/homepage/government/2.png";
import swiper3 from "../../../assets/homepage/government/3.png";
import swiper4 from "../../../assets/homepage/government/4.png";
import swiper5 from "../../../assets/homepage/government/5.png";
import swiper6 from "../../../assets/homepage/government/6.png";
import swiper7 from "../../../assets/homepage/government/7.png";
import swiper8 from "../../../assets/homepage/government/8.png";
import swiper9 from "../../../assets/homepage/government/9.png";
import swiper11 from "../../../assets/homepage/government/11.png";
import swiper12 from "../../../assets/homepage/government/12.png";
const Governement = () => {
    const slides = [swiper1,swiper2,swiper3,swiper4,swiper5,swiper6,swiper7,swiper8,swiper9,swiper11,swiper12];

  return (
    <Container className='px-0 py-5'>
        <div className='d-flex justify-content-center py-5'>
            <span className='special-title '>خدمات المنصات الحكومية</span>
        </div>
        <SwiperComponent slides={slides} />
    </Container>
  );
};

export default Governement;
