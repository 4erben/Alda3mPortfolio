import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./sass/custom.min.css";
import 'swiper/css';
import { Container, Row } from 'react-bootstrap';
import Header from './layout/Header/Header';
import HomePage from './Pages/Homepage/Home';
import Footer from './layout/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import ServicesP from './Pages/ServicesPage/ServicesP';
import BlogsP from './Pages/BlogsPage/BlogsP';
import AboutP from './Pages/AboutPage/AboutP';

function App() {


  return (
    <Container fluid dir='rtl' className='px-0'>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesP />} />
        <Route path="/blogs" element={<BlogsP />} />
        <Route path="/about" element={<AboutP />} />
      </Routes>
      

   

      <Footer />
    </Container>
  )
}

export default App
