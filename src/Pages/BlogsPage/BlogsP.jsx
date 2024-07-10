import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Components/HeroSection'

export default function BlogsP() {
  return (
    <Container fluid className='px-0'>
        <HeroSection
            title="المدونة"
            description ="تابع آخر أخبار اليوم، وابق مطلعاً على أحدث المستجدات والتطورات العاجلة في مجال الموارد البشرية وخدمات الشؤن الإدارية عبر تغطية مستمرة من الداعم الدائم ."
        />
    </Container>
  )
}
