import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./footer.css";
import logo from "../../assets/lightlogo.png";
import footerImg from "../../assets/logo1.png";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { IoMdArrowDropleft } from 'react-icons/io';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';

export default function Footer() {
  return (
    <Container fluid className='footer px-0'>
        <Row className='pt-5 px-5 d-flex justify-content-between align-items-center'>
            <Col lg={3} md={5} sm={6}>
                <img src={logo} alt="logo" className='logo'/>
                <span className='logo-name'> الداعم الدائم</span>
            </Col>
            <Col lg={4} md={5} sm={6} className="social-media me-auto">
                <span className='social-icon me-lg-auto'><FaFacebook /></span>
                <span className='social-icon '><FaYoutube className='' /></span>
                <span className='social-icon '><FaWhatsapp /></span>
                <span className='social-icon '><FaInstagram /></span>
                <span className='social-icon '><FaXTwitter /></span>
                <span className='social-icon '><FaTelegram /></span>
            </Col>
        </Row>
        <Row className='pt-4'>
            <Col lg={3} md={3} sm={6} className='my-3'>
                <span className='footer-title'>من نحن</span>
                <p>مؤسسة "الداعم الداعم هي مؤسسة رائدة في مجال المساعدة الإدارية و الموارد البشرية وتطوير المواهب. تأسست المؤسسة بهدف تقديم خدمات شاملة ومتخصصة للشركات والمؤسسات لمساعدتها في تحقيق أهدافها وتطوير مواردها البشرية</p>
            </Col>
            <Col lg={3} md={3} sm={6} className='my-3'>
                <span className='footer-title'>الوصول السريع</span>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>الصفحة الرئيسية</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>الخدمات</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>المدونة</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>اخر الاخبار</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>من نحن</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>تواصل معنا</span>
                </div>
                <div className='access-li'>
                    <span><IoMdArrowDropleft /></span>
                    <span className='li'>شركاء النجاح</span>
                </div>
            </Col>
            <Col lg={3} md={3} sm={6} className='my-3'>
                <span className='footer-title'>تواصل معنا</span>
                <div className='access-li'>
                    <span className='ms-2'><CiLocationOn /></span>
                    <span className='li'>جدة</span>
                </div>
                <div className='access-li'>
                    <span className='ms-2'><MdOutlineSupportAgent/></span>
                    <span className='li'>اتصل بنا</span>
                </div>
                <div className='access-li'>
                    <span className='ms-2'><CiMail /></span>
                    <span className='li'>hr.alda3m@gmail.com</span>
                </div>
                <div className='access-li'>
                    <span className='ms-2'><IoCallOutline /></span>
                    <span className='li'>الدعم السريع</span>
                </div>
            </Col>
            <Col lg={3} md={3} sm={6} className='px-4 my-3'>
                <span className='footer-title'>اشترك معنا</span>
                <div>
                    <input className='input-footer form-control' placeholder='ادخل الايميل'/>
                    <button className='btn btn-secondary mt-4 px-5'>اشتراك</button>
                </div>
                <div className='d-flex'>
                    <img src={footerImg} alt="footerImg" className='footer-img' />
                </div>
            </Col>
        </Row>
        <Row className='footer-bottom'>
            <span>الداعم الدائم - جميع الحقوق محفوظة 2024 @ - الشروط والأحكام | سياسة الخصوصية</span>
        </Row>
    </Container>
  )
}
