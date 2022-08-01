import React from 'react'
import './Training.css'
import { Row, Col } from 'reactstrap';
import ClassTrainingCourse from '../../Assets/Images/Class__Training__course.png'



const Training = () => {
  return (
    <div className="Training">

        <Row className="Training__row" >
        <Col id="Training__R1__col1" xl="4">
         <img id = "Training_img__body" src={ClassTrainingCourse} alt="Corona PMU"/>
          </Col>
            <Col>
          <h1 className="Training__h1">
          1:1 OMBRE POWDER BROW TRAINING FOR BEGINNERS
          </h1>
          <p className="Training__p">
          Ombre powder brow training is all about powder brow technique and what you need to know in order to start the PMU business:  
          sanitation/hygiene, licensing, marketing, brow mapping/shaping, color theory, powder technique, skin anatomy, needles, photography, pictures/video editing and so much more. 
          At the end of the trainings, you will receive a shading starter kit with the basic supplies. The shading starter kit is worth $600.<br/>
          Starting your own business might be scary, I know as  I went through all of this and I’m here to help you. 
          I will share my knowledge, experience, and so much more.
          There is a saying that “Practice is the key” and I want to add that a good foundation at the beginning and knowledge of where to start is the key to success. <br/>
          <br/>
          $600 a non-refundable booking fee is required to reserve your spot. The remaining payment is  due in Cash or Zelle a day before the training starts. 
          </p>
          </Col>
          </Row>
          <Row className="Training__row__2" >
          <Col id="Training__R2__col1" xl="4">
          <div>
            <h5 className="Training__h5"> <strong>Day 1</strong>
            </h5>
            <h3 className="Training__h3">
            Theory & Practice </h3>
              <p id="Training__p__1"> 
              (~8 Hours)</p>
                </div>
          </Col>
          <Col id="Training__R2__col2" xl="4">
          <div>
            <h5 className="Training__h5"> <strong>Day 2</strong>
            </h5>
            <h3 className="Training__h3">
             Mapping & Shaping </h3>
              <p id="Training__p__1"> 
              (~6 hours)</p>
                </div>
          </Col>
          <Col id="Training__R2__col1" xl="4">
          <div>
            <h5 className="Training__h5"> <strong>Day 3</strong>
            </h5>
            <h3 className="Training__h3">
            Practicing On The Model </h3>
              <p id="Training__p__1"> 
              (~6-8 Hours)</p>
                </div>
          </Col>
        
          </Row>
          <Row className="Training__row__2" >
            <Col>
            <div id="mobile_order">
             <h2 className="Training__h2__price">
                / $2,000 /
              </h2>
                <a id="button__style" href='https://calendly.com/browsjungle/4-5hours' target='_blank'>     
          <button id='Training__row1__button'>
              Book Now</button>
              </a>
             </div>
          <h2 className="Training__h2">
          Disclaimer
          </h2>
          <p className="Training__p__2">
          BROWS JUNGLE, LLC is a licensed and permitted permanent makeup studio that offers Trainings and services and cannot grant licenses or diplomas. 
          At the end of the Training, you will receive a certificate of completion. To become a permanent makeup artist, 
          it is required to obtain your own licensing/permits through your own city/county. 
          Each state/county has varying regulations/laws for permanent makeup and body art, 
          and it is your responsibility to contact your local Health Department to verify specific requirements. 

          </p>
          </Col>
          </Row>
        
    </div>
  )
}
export default Training;