import React from "react";
import Tensor_logo from '../components/Tensor_logo.png';
import Button from '@material-ui/core/Button';
export const Navigation = (props) => {
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

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
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
            <li>
              <a href='#testimonials' className='page-scroll'>
            Benefits
              </a>
            </li>
            
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>

            <li>
              <a href='#team' className='page-scroll'>
              <Button variant="contained" color="primary" className="apply_button">
 APPly Now
</Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
