import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import heroHome from "../../../assets/home1.png";

export default function Hero() {
  return (
    <Container className='hero pt-5 px-0 d-flex align-items-center justify-content-center' fluid>
          <Row className='hero-row'>
            <Col lg={5} md={5}>
              <h1>ابداع الماسي</h1>
              <p>
              تأسست منظومه ابداع الماسي من عام 2015 بخبرات مهنية واسعة وألتزمت في مجال الموارد البشرية ورسم خطوات للمنظمات والمؤسسات والشركات من الاستراتيجيات والنمو الفعال .
              </p>
              <div className='d-flex'>
                <button className='btn btn-secondary'>تواصل معنا</button>
                <button className='btn btn-white'>تواصل معنا</button>
              </div>
            </Col>
            <Col lg={7} md={7} className='d-flex justify-content-center align-items-center mt-3'>
              <img src={heroHome}  className='img-fluid animated'/>
            </Col>
          </Row>
    </Container>
  )
}
