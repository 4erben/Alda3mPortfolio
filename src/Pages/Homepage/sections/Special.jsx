import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { MdOutlineChangeCircle, MdOutlineEmojiObjects, MdOutlineWorkspacePremium } from 'react-icons/md'

export default function Special() {
  return (
    <Container className='special '>
        <div className='d-flex justify-content-center align-items-center'>
            <span className='special-title text-center'>اهم ما يميزنا</span>
        </div>
        <Row className='mt-5 py-5'>
            <Col lg={4} md={4}>
                <div className='special-col'>
                    <div className='d-flex icon-container'>
                        <span className='icon'><MdOutlineChangeCircle  /></span>
                        <span>رؤيتنا</span>
                    </div>
                    <div>
                    نسعى لتحقيق تميز استراتيجي في المساعد الإدارية
                    وإدارة الموارد البشرية وتطوير بيئات عمل ملهمة ومبتكرة تعزز رضا الموظفين وتعزز نمو الشركات والمؤسسات
                    </div>
                    <div className='special-bottom mt-2'>
                        <span>قراءة المزيد</span>
                        <span className='mx-3'><IoMdArrowRoundBack /></span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4}>
                <div className='special-col'>
                    <div className='d-flex icon-container'>
                        <span className='icon'><MdOutlineEmojiObjects  /></span>
                        <span className=''>هدفنا</span>
                    </div>
                    <div>هدفنا هو توفير تقديم المساعدة الإدارية. وحلول موارد بشرية مبتكرة ومتخصصة تدعم المؤسسات في تحقيق استدامة وتفوق في أدائها العملي. </div>
                    <div className='special-bottom   mt-2'>
                        <span>قراءة المزيد</span>
                        <span className='mx-3'><IoMdArrowRoundBack /></span>
                    </div>
                </div>
            </Col>
            <Col lg={4} md={4}>
                <div className='special-col'>
                    <div className='d-flex icon-container'>
                        <span className='icon'><MdOutlineWorkspacePremium  /></span>
                        <span>رسالتنا</span>
                    </div>
                    <div>تزويد عملائنا بأفضل الخطط والاستراتيجيات المدروسة حسب الاحتياج لكل منظومة ونساعد على إيجاد الحلول بكل فعالية وبأعلى المعايير .</div>
                    <div className='special-bottom mt-2'>
                        <span>قراءة المزيد</span>
                        <span className='mx-3'><IoMdArrowRoundBack /></span>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}
