import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import about from "../../../assets/about.png";
import { IoCheckboxOutline } from 'react-icons/io5';

export default function ManageService() {
  return (
    <Container className='my-5 about'>
        <Row className='px-2 py-5 align-items-center'>
            <Col lg={6} md={6} className='px-5 my-3'>
                <img src={about} className='img-fluid' />
            </Col>
            <Col lg={6} md={6} className='px-5 my-3'>
                <h2>خدمات الشؤون الادارية و العمالية</h2>
                <div className='d-flex flex-column'>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>تقديم المساعدة في القضايا العمالية</span>
                    </div>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>تقديم المساعدة في العقود</span>
                    </div>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>تقديم المساعدة في السياسات والإجراءات</span>
                    </div>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>تقديم المساعدة في تصفية الحقوق وطريقة إنهاء العقود بشكل صحيح</span>
                    </div>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>كتابة صحيفة دعوى</span>
                    </div>
                    <div className='about-p'>
                        <span className='icon'><IoCheckboxOutline /></span>
                        <span>رفع دعوى عمالية</span>
                    </div>
                    <div className='about-p mt-4'>
                        <button className='btn btn-secondary me-0'>قراءة المزيد</button>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
