import React from 'react'
import './Workshop.css'
import { Row, Col } from 'reactstrap';
import ClassWorkshopCourse from '../../Assets/Images/Class__workshop__course.png'



const Workshop = () => {
  return (
    <div className="Workshop">

        <Row className="Workshop__row" >
        <Col id="Workshop__R1__col1" xl="4">
         <img id = "Workshop_img__body" src={ClassWorkshopCourse} alt="Corona PMU"/>
          </Col>
            <Col>
          <h1 className="Workshop__h1">
          1:1 OMBRE POWDER BROW TRAINING FOR BEGINNERS
          </h1>
          <p className="Workshop__p">
          Ombre powder brow workshop course is all about powder brow technique and what you need to know in order to start the PMU brow business:  
          sanitation/hygiene, licensing, marketing, brow mapping/shaping, color theory, powder technique, skin anatomy, needles, photography, pictures/video editing and so much more. 
          At the end of the trainings, you will receive a shading starter kit with the basic supplies. The shading starter kit is worth $600.<br/>
          Starting your own business might be scary, I know as  I went through all of this and I’m here to help you. 
          I will share my knowledge, experience, and so much more that I was missing during my training. 
          There is a saying that “Practice is the key” and I want to add that a good foundation at the beginning and knowledge of where to start is the key to success. <br/>
          <br/>
          $500 a non-refundable booking fee is required to reserve your spot at the workshop. The remaining payment is  due in Cash or Zelle a day before the course starts. 
          </p>
          </Col>
          </Row>
          <Row className="Workshop__row__2" >
          <Col id="Workshop__R2__col1" xl="4">
          <div>
            <h5 className="Workshop__h5"> <strong>Day 1</strong>
            </h5>
            <h3 className="Workshop__h3">
            All About Theory And Practice</h3>
              <p id="Workshop__p__1"> 
              (~8 Hours)</p>
                </div>
          </Col>
          <Col id="Workshop__R2__col2" xl="4">
          <div>
            <h5 className="Workshop__h5"> <strong>Day 2</strong>
            </h5>
            <h3 className="Workshop__h3">
            Learning Mapping Technique Day</h3>
              <p id="Workshop__p__1"> 
              (~6 hours)</p>
                </div>
                <a href='https://calendly.com/browsjungle/4-5hours' target='_blank'>     
          <button id='Workshop__row1__button'>
              Book Now</button>
              </a>
          </Col>
          <Col id="Workshop__R2__col1" xl="4">
          <div>
            <h5 className="Workshop__h5"> <strong>Day 3</strong>
            </h5>
            <h3 className="Workshop__h3">
            Practicing On The Model Day</h3>
              <p id="Workshop__p__1"> 
              (~6-8 Hours)</p>
                </div>
               
          </Col>
          </Row>
          <Row className="Workshop__row__2" >
            <Col>
          <h2 className="Workshop__h2">
          Disclaimer
          </h2>
          <p className="Workshop__p__2">
          BROWS JUNGLE, LLC is a licensed and permitted permanent makeup studio that offers workshops and services and cannot grant licenses or diplomas. 
          At the end of the workshop, you will receive a certificate of completion. To become a permanent makeup artist, 
          it is required to obtain your own licensing/permits through your own city/county. 
          Each state/county has varying regulations/laws for permanent makeup and body art, 
          and it is your responsibility to contact your local Health Department to verify specific requirements. 

          </p>
          </Col>
          </Row>
        
      
    </div>
  )
}
export default Workshop;