import React from 'react'
import { FaLinkedin } from "react-icons/fa";
export default function ProfileCard() {
	return (
		<>
			<h3 className="spotlight-heading">Our Instructor</h3>
			<div className="Leader-main-container">
				<div className="Profile-container">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM_S6A-J4QWH--VXRDX-FNC9xQ-uCj7p0Rg&usqp=CAU" style={{ maxWidth: "280px" }}></img>
					<h3>Name</h3>
					<p>paragraph</p>
					<a style={{ color: "blue", fontSize: "20px" }}> <FaLinkedin style={{ color: "blue", fontSize: "20px" }}></FaLinkedin> Linkedin</a>
				</div>
				<div className="Profile-container">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaM_S6A-J4QWH--VXRDX-FNC9xQ-uCj7p0Rg&usqp=CAU" style={{ maxWidth: "280px" }}></img>
					<h3>Name</h3>
					<p>paragraph</p>
					<a style={{ color: "blue", fontSize: "20px" }}> <FaLinkedin style={{ color: "blue", fontSize: "20px" }}></FaLinkedin> Linkedin</a>
				</div>
			</div>
			<div className="contact-btn-container"><button>CONTACT US</button></div>
		</>
	)
}
