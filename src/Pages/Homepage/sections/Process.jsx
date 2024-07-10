import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import process1 from "../../../assets/homepage/process/process1.png";
import process2 from "../../../assets/homepage/process/process2.png";
import process3 from "../../../assets/homepage/process/process3.png";
export default function Process() {
  return (
    <Container id='process' className='mt-3'>
        <div className="d-flex justify-content-center">
            <span className='special-title'>نمط عمل الداعم الدائم</span>
        </div>
        <Row className=' py-5'> 
            <Col lg={4} md={4}>
                <div className="card">
                    <div className="image">
                        <img src={process1} alt="process1" className='process-image' />
                    </div>
                    <div>
                        <h3>اتقان العمل</h3>
                        <p>اهم عوامل النجاح و استمرار الشركات هو التخطيط المستمر ووضع خطط بديلة سعيا منا للاحترافية في عملنا</p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4}>
                <div className="card">
                    <div className="image">
                        <img src={process2} alt="process1" className='process-image' />
                    </div>
                    <div>
                        <h3>ثقة عملائنا </h3>
                        <p>لنرتقي بثقتكم نسعى باستمرار في الابتكار و خلق الأفكار و التطوير في الموارد البشرية تلبية لاحتياجات عملائنا المختلفة</p>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4}>
                <div className="card">
                    <div className="image">
                        <img src={process3} alt="process1" className='process-image' />
                    </div>
                    <div>
                        <h3>قيمنا</h3>
                        <p>النزاهة هيا الاساس لمنظومة اعمالنا و التي تدفعنا للالتزام بالتميز باعلى المعايير الأخلاقية و المهنية</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
