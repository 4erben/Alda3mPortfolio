import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import s1 from "../../../assets/homepage/5.jpeg";
import s2 from "../../../assets/homepage/7.jpg";
import s3 from "../../../assets/homepage/1.webp";
import s4 from "../../../assets/homepage/2.jpeg";
import s5 from "../../../assets/homepage/3.jpg";
import s6 from "../../../assets/homepage/4.jpeg";


export default function Services() {
  return (
    <Container className='services '>
        <div className='d-flex justify-content-center align-items-center'>
            <span className='special-title text-center'>الخدمات</span>
        </div>
        <Row className='mt-5 py-5'>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s1} className='rounded' />
                </div>
                <span>الموارد البشرية</span>
            </div>
           </Col>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s2} className='rounded' />
                </div>
                <span>التوظيف</span>
            </div>
           </Col>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s3} className='rounded' />
                </div>
                <span>العلاقات الحكومية</span>
            </div>
           </Col>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s4} className='rounded' />
                </div>
                <span>المالية</span>
            </div>
           </Col>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s5} className='rounded' />
                </div>
                <span>خدمة الشؤون الادارية و العمالية</span>
            </div>
           </Col>
           <Col lg={4} md={4}>
            <div className="card pb-4">
                <div className='image p-4 '>
                    <img src={s6} className='rounded' />
                </div>
                <span>التصميم و البرمجيات</span>
            </div>
           </Col>
        </Row>
    </Container>
  )
}
