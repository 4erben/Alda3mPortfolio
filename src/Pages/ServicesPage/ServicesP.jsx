import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Services from '../Homepage/sections/Services'
import HeroSection from '../../Components/HeroSection'

export default function ServicesP() {
  return (
    <Container fluid className='px-0 homepage'>
        <HeroSection 
            title={"الخدمات"}
            description ="نحن نعمل على تزويد عملائنا بأفضل الخطط والاستراتيجيات المدروسة حسب الاحتياج لكل منظومة ونساعد على إيجاد الحلول بكل فعالية وبأعلى المعايير ."
        />
        <Services />
    </Container>
    
  )
}
