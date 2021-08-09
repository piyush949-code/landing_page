import React, { useState } from "react";
import Tensor_logo from '../components/Tensor_logo.png';
import Button from '@material-ui/core/Button';
import { Row } from "react-foundation";
import { Column } from "react-foundation";
import Modal from "./Modal";
export const Navigation = (props) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (

    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle Columnlapsed'
            data-toggle='Columnlapse'
            data-target='#bs-example-navbar-Columnlapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src={Tensor_logo} alt="" />
          </a>{' '}
        </div>
        <Row style={{ width: "80%",display:"flex",justifyContent: "space-evenly" }}>
          <Column style={{width:"max-content"}}>
            <a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#about' className='page-scroll' className="top-option">
              ABOUT
            </a>
          </Column>
          <Column style={{width:"max-content"}} >  <a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#services' className='page-scroll'>
            SYLLABUS
          </a>
          </Column>
          <Column style={{width:"max-content"}}><a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#portfolio' className='page-scroll'>
            PROJECTS
          </a></Column>
          <Column style={{width:"max-content"}}> <a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#features' className='page-scroll'>
            INSTRUCTORS
          </a>
          </Column>
          <Column style={{width:"max-content"}}><a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#testimonials' className='page-scroll'>
            BENEFITS
          </a></Column>
          <Column style={{width:"max-content"}}> <a style={{ fontSize: "1.9vh", fontWeight: "600", textDecoration: "none", padding: "0% 1%" }} href='#contact' className='page-scroll'>
            CONTACT
          </a></Column>
          <Column  style={{width:"max-content"}}>
            <a href='#team' className='page-scroll'>
              <button onClick={openModal} style={{ border: "1px solid #2242f5", backgroundColumnor: "#2242f5", Columnor: "#fff", fontSize: "1.9vh ", borderRadius: "5px", zIndex: "1", width: "15vh",background:" linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);" }}>APPLY NOW</button>
              <Modal style={{ height: "100vh", width: "100vw", position: "fixed" }} showModal={showModal} setShowModal={setShowModal} />
            </a>
          </Column>
        </Row>
      </div>
    </nav>
  )
}
