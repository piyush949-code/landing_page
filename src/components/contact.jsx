import React from 'react'
import './component.css'
export default function contact() {
  return (
    <>
      <div className="contact-card-parent-container">
        <h4 style={{
          alignSelf: "flex-start",
          marginLeft: "72px",
          marginBlock: "10px",
          fontSize: "40px",
          color: "white"
        }} className="spotlight-heading">ABOUT US</h4>
        <p>Lejhro was founded in 2013 with a mission to empower the next generation of innovators by providing the opportunities. As a global technology company, we connect dynamic networks of people, data & ideas - accurately delivering business with quality and commitments.
          Lejhro Tensor is an exclusive line of business of Lejhro Technology carefully designed to align students with agile industry requirements and enhance their employability.</p>
        <div className="contact-card-video-container">
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
