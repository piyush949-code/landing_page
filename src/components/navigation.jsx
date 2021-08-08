
import React, { useState} from "react";
import Tensor_logo from '../components/Tensor_logo.png';
import Button from '@material-ui/core/Button';
export const Navigation = (props) => {
const [showModal,setShowModal]=useState(false)
const openModal=()=>{
        setShowModal(prev=>!prev)
      }

  return (
    
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
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
        <Row style={{width:"70%"}}>
          <Col >
          <a  style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}}href='#about' className='page-scroll' className="top-option">
            About
              </a>
          </Col>
          <Col >  <a style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}} href='#services' className='page-scroll'>
            Syllabous
              </a>
            </Col>
          <Col > <a style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}} href='#features' className='page-scroll'>
             Instructors
              </a>
              </Col>
          <Col ><a style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}} href='#portfolio' className='page-scroll'>
                Projects
              </a></Col>
          <Col ><a style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}} href='#testimonials' className='page-scroll'>
            Benefits
              </a></Col>
          <Col > <a style={{fontSize:"1.9vh",fontWeight:"600",textDecoration:"none",padding:"0% 1%"}} href='#contact' className='page-scroll'>
                Contact
              </a></Col>
          <Col  >
           <a  href='#team'  className='page-scroll'>
              <button  onClick={openModal} style={{border:"1px solid #2242f5",backgroundColor:"#2242f5",color:"#fff",fontSize:"1.9vh ",borderRadius:"5px",zIndex:"1",width:"15vh"}}>Apply Now</button>
              <Modal style={{height:"100vw",width:"100vh",position:"fixed"  }} showModal={showModal} setShowModal={setShowModal}/>
              </a>
              </Col>


        </Row>
        {/* <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right nav-list'>
            <li className="nav-line">
              <a href='#about' className='page-scroll'>
            About
              </a>
            </li>
            <li>
              <a href='#Syllabous' className='page-scroll'>
            Syllabus
              </a>
            </li>
            <li>
              <a href='#Instructor' className='page-scroll'>
             Instructors
              </a>
            </li>
            <li>
              <a href='#ProjectCard' className='page-scroll'>
                Projects
              </a>
            </li>
            <li className="nav-line">
              <a href='#testimonials' className='page-scroll'>
            Benefits
              </a>
            </li>
            
            <li className="nav-line">
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>

            <li className="nav-line">
              <a href='#team' className='page-scroll'>
              <Button variant="contained" color="primary" className="apply_button">
 APPly Now
</Button>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  )
}
