import React, { useState } from 'react';
import "./header.css";
import logo from "../../assets/lightlogo.png";
import { Link } from 'react-router-dom';
import {Container , Navbar ,Nav, Row} from "react-bootstrap";
import { IoIosHelpCircleOutline, IoLogoBitbucket, IoMdClose } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline, IoMenuOutline } from "react-icons/io5";
import { FaPagelines } from "react-icons/fa6";
import { MdOutlineCategory, MdOutlineManageAccounts, MdWifiCalling2 } from "react-icons/md";
export default function Header() {
    const [isExpanded , setExpanded] = useState(false);
  return (
    <div id='header'>
    <div className={`fullscreen ${!isExpanded?"d-none":""} `} onClick={()=>setExpanded(false)}></div>
    <nav id='sidebar' className={`${isExpanded?"expanded":""} px-2`}>
        <div className='d-flex justify-content-between px-3 pt-3 fs-4 fw-bold'> 
            <span className='text-secondary'>الداعم الدائم</span>
            <span onClick={()=>setExpanded(false)} className='cursor-pointer'><IoMdClose /></span>
        </div>
        <hr/>
        <div className='d-flex flex-column'>
            <Link to="/">
                <span><IoHomeOutline /></span>
                <span>الصفحة الرئيسية</span>
            </Link>
            <Link to="/services">
                <span><CiShop /></span>
                <span>الخدمات</span>
            </Link>
        </div>
        <hr/>
        <div className='d-flex flex-column'>
            <Link to="/">
                <span><CiShop /></span>
                <span>خدمات الافراد</span>
            </Link>
            <Link to="/">
                <span><CiShop /></span>
                <span>خدمات الشركات</span>
            </Link>
            <Link to="/">
                <span><MdOutlineCategory /></span>
                <span>المدونة</span>
            </Link>
            <Link to="/">
                <span><FaPagelines /></span>
                <span>الشركاء</span>
            </Link>
            <Link to="/">
                <span><MdOutlineManageAccounts /></span>
                <span>اهم خدماتنا</span>
            </Link>
        </div>
        <hr/>
        <div className='d-flex flex-column'>
            <Link to="/">
                <span><IoIosHelpCircleOutline /></span>
                <span>من نحن</span>
            </Link>
            <Link to="/">
                <span><MdWifiCalling2 /></span>
                <span>تواصل معنا</span>
            </Link>
        </div>
    </nav>
   
    <div id='navbar' className=" d-flex justify-content-around py-3 fixed-top mt-3 z-2">
        <div>
        <span onClick={()=>setExpanded(true)} className='cursor-pointer text-white'><IoMenuOutline size={40}  /></span>
        <Link to="/" className='text-primary'><img src={logo} className='logo' /></Link>
        </div>
        <Nav className=" d-md-flex d-none">
            <Link className="nav-link  " to="/">
                <span className="">الرئيسية</span>
            </Link>
            <Link className="nav-link " to="/services">
                <span>الخدمات</span>
            </Link>
            <Link className="nav-link " to="/blogs">
                <span>المدونة</span>
            </Link>
            <Link className="nav-link " to="/about">
                <span>من نحن</span>
            </Link>
        </Nav>
        <div>
            <button className='btn btn-secondary'>تواصل معنا</button>
        </div>
    </div>
    </div>
  )
}
