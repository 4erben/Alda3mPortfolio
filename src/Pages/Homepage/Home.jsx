import React from 'react'
import { Container } from 'react-bootstrap';
import "./homepage.css";
import haikei from "../../assets/wave-haikei.png";
import Hero from './sections/Hero'
import Special from './sections/Special';
import Services from './sections/Services';
import StatBanner from './sections/StatBanner';
import ManageService from './sections/ManageService';
import Governement from './sections/Governement';
import Clients from './sections/Clients';
import Process from './sections/Process';
import Journey from './sections/Journey';

export default function HomePage() {
  return (
    <Container id='homepage' className='px-0 homepage' fluid> 
        <Hero/>
        <svg className='haikei' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <Special/>
        <Services />
        <StatBanner />
        <ManageService />
        <Governement />
        <Clients />
        <Process/>
        <Journey />
    </Container>
  )
}
