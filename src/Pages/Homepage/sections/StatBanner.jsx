import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import banner from "../../../assets/homepage/static-banner.png";
 
export default function StatBanner() {
  return (
    <Container className='stat-banner px-0 d-flex align-items-center' fluid>
        <img src={banner} className='banner'/>
        <Row className='justify-content-around align-items-center h-100 w-100'>
            <Col lg={3} md={3} sm={6} xs={6} className='col'>
                <p>1200 <sup>+</sup></p>
                <p>عملائنا</p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='col'>
                <p>12 <sup>+</sup></p>
                <p>العقود السنوية</p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='col'>
                <p>10 <sup>+</sup></p>
                <p>سنوات الخبرة</p>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='col'>
                <p>23 <sup>+</sup></p>
                <p>العقود الطويلة</p>
            </Col>
        </Row>
    </Container>
  )
}
