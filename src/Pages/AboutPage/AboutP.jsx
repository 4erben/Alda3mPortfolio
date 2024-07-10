import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../../Components/HeroSection'
import ManageService from '../Homepage/sections/ManageService'
import Special from '../Homepage/sections/Special'
import Process from '../Homepage/sections/Process'
import Journey from '../Homepage/sections/Journey'

export default function AboutP() {
  return (
    <Container className='px-0 homepage ' fluid>
        <HeroSection
            title="من نحن"
            description={`مؤسسة "الداعم الداعم هي مؤسسة رائدة في مجال المساعدة الإدارية و الموارد البشرية وتطوير المواهب. تأسست المؤسسة بهدف تقديم خدمات شاملة ومتخصصة للشركات والمؤسسات لمساعدتها في تحقيق أهدافها وتطوير مواردها البشرية. تتميز مؤسسة "الداعم الداعم" بفريق عمل محترف ومتخصص يضم خبراء في مجالات الموارد .التوظيف، التدريب، وإدارة الأداء. تهدف المؤسسة إلى تقديم حلول مبتكرة وملائمة لاحتياجات الشركات، .`}
        />
        <ManageService />
        <Special />
        <Process />
        <Journey />
    </Container>
  )
}
