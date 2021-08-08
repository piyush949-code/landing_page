import React from 'react'
import './component.css'
export default function contact() {
  return (
    <>
      <div className="contact-card-parent-container">
        <div className="contact-card-video-container">
        <p></p>
          <div className="contact-card-video-child-one">
            <iframe src="https://www.youtube.com/embed/_P8tgw7QieU">
            </iframe>
          </div>
          <div className="contact-card-video-child-two">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
        <hr></hr>
        <div className="contact-card-footer-container" >
          <ul>
          
            <li>Address: No. 757, 2nd floor, 4th Main Rd, Konena Agrahara, Bengaluru, Karnataka 560017</li>
            <li>phone : 9937175522</li>
            <li>Email :contact@lejhro.com</li>
          </ul>
        </div>
      </div>
    </>
  )
}
