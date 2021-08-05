import React from "react";
import Tensor_logo from '../components/Tensor_logo.png';
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
              <a href='#services' className='page-scroll'>
            Syllabous
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
             Instructors
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
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
              <button>Apply Now</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
