import React from 'react'
import './component.css'
import img_one from './project_one_img.jpg'
import img_two from './project_two_img.jpg'
import img_three from './project_three_img.jpg'
import img_four from './project_four_img.jpg'
function ProjectCard() {
  return (
    <>
      <h3 className="spotlight-heading">PROJECTS</h3>
      <div className="project-card-parent-container">
        <div className="project-card-child" >
          <img src={img_one}></img>
          <h2>House Price Prediction:</h2>
          <p>Using trained model to predict house sale prices with help of Linear Regression.</p>
        </div>
        <div className="project-card-child">
          <img src={img_two}></img>
          <h2>Wine Quality prediction:</h2>
          <p>Predicting Beverage/Wine quality using Regression Model.</p>
        </div>
        <div className="project-card-child">
          <img src={img_three}></img>
          <h2>Attrition Prediction:</h2>
          <p>Using Regression technique, we can predict customer churn.</p>
        </div>
        <div className="project-card-child">
          <img src={img_four}></img>
          <h2>Air jet passenger satisfaction:</h2>
          <p>Using Classification technique, we can determine Air passenger satisfaction.</p>
        </div>
      </div>
    </>
  )
}
export default ProjectCard
