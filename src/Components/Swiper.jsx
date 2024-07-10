import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';


export default function SwiperComponent({slides}) {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <Container className='d-flex swiper-comp align-items-center' >
      <button ref={prevRef} className='btn-swiper'><GrFormNext /></button>
      <Swiper
        className='mx-4 w-100'
        spaceBetween={50}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 2000 ,pauseOnMouseEnter: true}}
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {slides?.map((slide,i)=>{
          return(
            <SwiperSlide key={i}><img src={slide} className='swiper-img'/></SwiperSlide>
          )
        })}
        

      </Swiper>
      <button ref={nextRef} className='btn-swiper'><GrFormPrevious /></button>
    </Container>
  );
}
