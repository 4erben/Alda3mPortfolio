import React from 'react'
import SwiperComponent from '../../../Components/Swiper';
import swiper1 from "../../../assets/homepage/clients/1.png";
import swiper2 from "../../../assets/homepage/clients/2.png";
import swiper3 from "../../../assets/homepage/clients/3.png";
import swiper4 from "../../../assets/homepage/clients/4.png";
import swiper5 from "../../../assets/homepage/clients/5.png";
import swiper6 from "../../../assets/homepage/clients/6.png";
import swiper7 from "../../../assets/homepage/clients/7.png";
import swiper8 from "../../../assets/homepage/clients/8.png";
import swiper9 from "../../../assets/homepage/clients/9.png";
import swiper10 from "../../../assets/homepage/clients/10.png";
import swiper11 from "../../../assets/homepage/clients/11.png";
import { Container } from 'react-bootstrap';
export default function Clients() {
    const slides = [swiper1,swiper2,swiper3,swiper4,swiper5,swiper6,swiper7,swiper8,swiper9,swiper10,swiper11];
    return (
        <Container className='px-0 py-5'>
            <div className='d-flex justify-content-center py-5'>
                <span className='special-title '>عملائنا</span>
            </div>
            <SwiperComponent slides={slides} />
        </Container>
      );
}
