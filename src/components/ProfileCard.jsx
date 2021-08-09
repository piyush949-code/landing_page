import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Jyotiranjan_one from '../components/Jyotiranjan_one.jpg'
import Bidintha_B from '../components/Bidintha_B.png'
export default function ProfileCard() {
	return (
		<>
			<h3 className="spotlight-heading">OUR INSTRUCTORS</h3>
			<div className="Leader-main-container">
				<div className="Profile-container">
					<img src={Bidintha_B} style={{ maxWidth: "280px" }}></img>
					<h3>Bidintha Basumatary</h3>
					<p>A certified data scientist & an AI expert with <br />25 years of rich experience  of both <br /> software development & project management.
					</p>
					<a href="https://www.linkedin.com/in/bidintha-basumatary-20b85b22/" style={{ color: "blue", fontSize: "20px" }}> <FaLinkedin style={{ color: "blue", fontSize: "20px" }}></FaLinkedin></a>
				</div>
				<div className="Profile-container">
					<img src={Jyotiranjan_one} style={{ maxWidth: "280px" }}></img>
					<h3>Jyoti Ranjan</h3>
					<p>An industry expert with 15 years of <br /> industry experience and having vast expertise <br /> in machine learning algorithm implementation.

					</p>
					<a href="https://www.linkedin.com/in/jyotiranjanjethy/"style={{ color: "blue", fontSize: "20px" }}> <FaLinkedin style={{ color: "blue", fontSize: "20px" }}></FaLinkedin></a>
				</div>
			</div>

		</>
	)
}

