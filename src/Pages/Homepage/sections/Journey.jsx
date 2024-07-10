import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import journey from "../../../assets/homepage/statistics.png";

export default function Journey() {
  return (
    <Container className='py-5' id='journey'>
        <Row className='justify-content-center align-items-center px-2'>
            <Col lg={6} md={6} className='px-4'>
                <img src={journey} className='img-fluid'/>
            </Col>
            <Col lg={6} md={6} className='px-5'>
                <span className='title'>رحلة عمل</span>
                <p>احصل علي دعمنا الدائم لك وطور شركتك في الموارد البشرية</p>
                <div>
                    <button className='btn btn-secondary'>خدمات الافراد</button>
                    <button className='btn btn-outline-secondary'>خدمات الشركات</button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
