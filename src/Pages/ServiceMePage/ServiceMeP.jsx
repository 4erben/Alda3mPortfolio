import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import HeroSection from '../../Components/HeroSection';
import service from "../../assets/service.png";

export default function ServiceMeP() {
  return (
    <Container fluid className='px-0'>
        <HeroSection 
            title="خدمات الشركات"
            description="نحن نعمل على تزويد عملائنا بأفضل الخطط والاستراتيجيات المدروسة حسب الاحتياج لكل منظومة ونساعد على إيجاد الحلول بكل فعالية وبأعلى المعايير ."
        />
        <Row className="py-5 mt-5">
        <Col lg={8} md={8} className='my-5'>
                <Form className='px-4'>
                    <Form.Group className='row'>
                        <Col lg={6} md={6}>
                            <Form.Label>الاسم كاملا</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Label>الايميل</Form.Label>
                            <Form.Control  />
                        </Col>
                    </Form.Group>
                    <Form.Group className='row'>
                        <Col lg={6} md={6}>
                            <Form.Label>رقم الهاتف</Form.Label>
                            <Form.Control  />
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Label>نوع الخدمة</Form.Label>
                            <Form.Select aria-label='Default select example'>
                                <option>اختر خدمة ...</option>
                                <option>الموارد البشرية</option>
                                <option>التوظيف</option>
                                <option>العلاقات الحكومية</option>
                                <option>المالية</option>
                                <option>خدمات الشؤون الادارية والعمالية</option>
                                <option>التصميم و البرمجيات</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group className='row px-3'>
                        <Form.Label className='px-0'>تفاصيل الخدمة</Form.Label>
                        <Form.Control as="textarea" rows={5} className='' />
                    </Form.Group>
                    <Form.Group className='mt-4 row px-3'>
                        <button className='btn btn-secondary mx-0 '>طلب الخدمة</button>
                    </Form.Group>
                </Form>
            </Col>
            <Col lg={4} md={4} className='my-5'>
                <img src={service} alt="img" className='img-fluid' />
            </Col>
        </Row>
    </Container>
  )
}
