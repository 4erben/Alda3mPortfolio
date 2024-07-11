import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import HeroSection from '../../Components/HeroSection'
import { CiLocationOn } from 'react-icons/ci';
import "./contact.css";
import contactImg from "../../assets/contact.png";

export default function ContactP() {
  return (
    <Container fluid className='px-0 contactP'>
        <HeroSection 
            title = "تواصل معنا"
            description="نحن نعمل على تزويد عملائنا بأفضل الخطط والاستراتيجيات المدروسة حسب الاحتياج لكل منظومة ونساعد على إيجاد الحلول بكل فعالية وبأعلى المعايير ."
        />
        <Row className='py-5 px-5'>
            <Col lg={4} md={4} className='col'>
                <div className="card-c">
                    <div>
                        <span className='icon-container'><CiLocationOn /></span>
                    </div>
                    
                    <div ><span className='card-title'>العنوان</span></div>
                    <div ><small className='card-bottom'>جدة</small></div>
                </div>
            </Col>
            <Col lg={4} md={4} className='col'>
                <div className="card-c">
                    <div>
                        <span className='icon-container'><CiLocationOn /></span>
                    </div>
                    <div ><span className='card-title'>الايميل</span></div>
                    <div >
                        <small className='card-bottom'>hr.alda3m@gmail.com</small>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4} className='col'>
                <div className="card-c" >
                    <div>
                        <span className='icon-container'><CiLocationOn /></span>
                    </div>
                    
                    <div ><span className='card-title'>الهاتف</span></div>
                    <div className='d-flex flex-column'>
                        <small className='card-bottom'>اتصل بنا: 966571861701</small>
                        <small className='card-bottom'>الواتساب: 966571861701</small>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='px-5 py-5'>
            <Col lg={8} md={8}>
                <Form className='px-4'>
                    <Form.Group className='row'>
                        <Col lg={6} md={6}>
                            <Form.Label>الاسم كاملا</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Label>رقم الهاتف</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Form.Group>
                    <Form.Group className='row'>
                        <Col lg={6} md={6}>
                            <Form.Label>الايميل</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Label>العنوان</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Form.Group>
                    <Form.Group className='row px-3'>
                        <Form.Label className='px-0'>الرسالة</Form.Label>
                        <Form.Control as="textarea" rows={5} className='' />
                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <button className='btn btn-secondary px-5'>ارسال</button>
                    </Form.Group>
                </Form>
            </Col>
            <Col lg={4} md={4}>
                <img src={contactImg} alt="img" className='img-fluid' />
            </Col>
        </Row>
    </Container>
  )
}
