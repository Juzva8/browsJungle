import React from 'react'
import { Row, Col } from 'reactstrap';
import { InlineWidget } from "react-calendly";
import permanent from '../../Assets/Images/Microblading.webp';
import lips from '../../Assets/Images/Lips.png';
import combo from '../../Assets/Images/permanent.png';
import './Home.css';
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent';
import NeedToKnow from '../../Components/NeedToKnow/NeedToKnow';



      const Home = () => {
      return (
      <div className="Home">
      <div className="Home__Banner">
      <h1 className = "Home__h1"> PERMANENT MAKEUP <br/> In Dos Lagos <br/>
            <span className="emphasis-1">Let's Enhance And Highlight Your Natural Beauty!</span> 
          </h1>
        </div>
        <ServicesComponent />
        <Row className="Home__row" >
            <Col>
          <h3 className="Home__h3">
            Get Microblading Today!
          </h3>
          <p className="Home__p">
          Microblading Gives You Natural-looking, Enhanced Looking Eyebrows Instantly!
          <br/>
          <br/>
          Microblading is a great alternative to eyebrow makeup that is growing in popularity for a number of reasons.
          </p>
          <a href='/Pricing/#Pricing__anchor__tag' target='_blank'>          
          <button id='Home__row1__button'>
          Book Now</button>
              </a>
        </Col>
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={permanent} alt="Digital Advertising"/>
          </Col>
        </Row>
        <div className="Home__Section__2">
        <Row className="Home__row__2" >
        <h2 className="Home__h2">
         Lip Blush Is So Hot Right Now!
          </h2>
        </Row>
        <Row className="Home__row" >
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={lips} alt="Digital Advertising"/>
          </Col>
            <Col>
          <h3 className="Home__h3">
          Why Get Lip Blush Before Lip Fillers
          </h3>
          <p className="Home__p">
          Lip blushing enhances your lips’ natural shade by adding pigment to make them subtly bolder and brighter and more full with shape adjustment. 
          Both treatments can help you achieve the gorgeous lips of your dreams, but you should always get the lip blush first.
          </p>
          <a href='/Pricing/#Pricing__anchor__tag' target='_blank'>     
          <button id='Home__row1__button'>
          Book Now</button>
          </a>
          </Col>
          </Row>
        </div>
        <Row className="Home__row__2" >
        <h2 className="Home__h2">
        What You Need To Know Before Booking
          </h2>
        </Row>
        <Row className="Home__row__3" >
        <Col id="Home__R2__col2" xl="5">
        <InlineWidget url="https://calendly.com/browsjungle/4-5hours" />
          </Col>
            <Col xl="10">
          < NeedToKnow />
          </Col>
          </Row>
          <Row className="Home__row" >
            <Col>
          <h3 className="Home__h3">
          It's Time To Get Ombre Brows!
          </h3>
          <p className="Home__p">
          Powder Brows Can Be Done As Light As A Brow Tint Or As Dark As Glam. Recommended For Those Who Want A Completely "Filled In" Brow!
          <br/>
          <br/>
          Ombre Brows Features A Soft, Powdery Front And Defined Lines To Create An Overall Spectacular And Remarkable Look.
          </p>
          <a href='/Pricing/#Pricing__anchor__tag' target='_blank'>     
          <button id='Home__row1__button'>
          Book Now</button>
            </a>
        </Col>
        <Col id="Home__R1__col1" xl="4">
         <img id = "Home_img__body" src={combo} alt="Digital Advertising"/>
          </Col>
        </Row>
</div>
  )
}


export default Home;