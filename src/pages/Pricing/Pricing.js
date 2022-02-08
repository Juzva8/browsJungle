import React from 'react'
import './Pricing.css'
import { Row, Col } from 'reactstrap';
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent'

function Pricing() {
  return (
    <div className="Pricing">
       <ServicesComponent />
       <Row className="Pricing__row" >
       <h1 className="Pricing__h1">
       PMU INITIAL SERVICE PRICE
         </h1>
       </Row>
       <Row className="Pricing__row" >
       <h2 id="Pricing__anchor__tag"  className="Pricing__h2__mob">
       AN IN-DEPTH CONSULTATION IS PROVIDED PRIOR TO BEGINNING THE PROCEDURE.
         </h2>
       </Row>
       <Row className="Pricing__row__3" >

       <Col id="Pricing__R1__col1" xl="3">
       <h2 className="Pricing__h2">
        / Lip Blush /
         </h2>
         <p className="Pricing__p"><b>
         Lip Blush tattoo enhances the natural shape of your lips, giving them that boost of vitality and even coloring. Lip blush tattoos are designed to last 2 to 3 years.
         </b>
         </p>
          <h2 className="Pricing__h2__price">
        / $425 /
         </h2>
         <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
          <button id='Pricing__row1__button'>
              Book Now</button>
              </a>
         </Col>
         <Col id="Pricing__R1__col1" xl="3">
         <h2 className="Pricing__h2">
        / Powder Brows /
         </h2>
         <p className="Pricing__p"><b>
         Powder brows can be done as light as a brow tint or as dark as glam. Recommended for those who want a completely "filled in" brow! Best for ALL skin types.
         </b>
         </p>
          <h2 className="Pricing__h2__price">
        / $425 /
         </h2>
         <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
          <button id='Pricing__row1__button'>
              Book Now</button>
              </a>
         </Col>
         <Col id="Pricing__R1__col1" xl="3">
         <h2 className="Pricing__h2">
        / Microblading /
         </h2>
         <p className="Pricing__p"><b>
         Microblading is a permanent procedure that mimics the same size of an eyebrow hair stroke through small incisions made with a microblade.

         </b>
         </p>
          <h2 className="Pricing__h2__price">
        / $425 /
         </h2>
         <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
          <button id='Pricing__row1__button'>
              Book Now</button>
              </a>
         </Col>

         <Col id="Pricing__R1__col1" xl="3">
         <h2 className="Pricing__h2">
        / Combo Brows /
         </h2>
         <p className="Pricing__p"><b>
         This technique offers the best of both powdered and hair stroke effects combined together to achieve a fluffy, textured, yet defined brow.

         </b>
         </p>
          <h2 className="Pricing__h2__price">
        / $425 /
         </h2>
         <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
          <button id='Pricing__row1__button'>
              Book Now</button>
              </a>
         </Col>

       </Row>
       <Row className="Pricing__row" >
       <h1 className="Pricing__h1__4">
       TOUCH UPS
         </h1>
       </Row>
       <Row className="Pricing__row__3" >
       <Row className="Pricing__row" >
       <h2 className="Pricing__h2__mob">
       Touch ups also make an essential part of permanent makeup treatment. You can lose 30% to 40% of the color and intensity as the skin heals. Touch up procedures are to fill, correct, and darken to provide the desired look.
         </h2>
       </Row>
<Col id="Pricing__R1__col1" xl="3">
<h2 className="Pricing__h2">
 Touch Up
  </h2>
  <p className="Pricing__p__1"><b>
  1 to 3 months after the initial session
  If you do not come back for your touch up in time, that was given by the artist you will be charged a full price again.
  </b>
  </p>
   <h2 className="Pricing__h2__price">
 / $120 /
  </h2>
  <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
   <button id='Pricing__row1__button'>
       Book Now</button>
       </a>
  </Col>

  <Col id="Pricing__R1__col1" xl="3">
  <h2 className="Pricing__h2">
 Annual Touch Up
  </h2>
  <p className="Pricing__p__1"><b>
  6-12 months after the touch up session.
  If you do not come back for your touch up in time, that was given by the artist you will be charged $50 for Biannual Touch Up.
  </b>
  </p>
   <h2 className="Pricing__h2__price">
 / $150 /
  </h2>
  <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
   <button id='Pricing__row1__button'>
       Book Now</button>
       </a>
  </Col>

  <Col id="Pricing__R1__col1" xl="3">
  <h2 className="Pricing__h2">
 Biannual Touch Up
  </h2>
  <p className="Pricing__p__1"><b>
  Biannual touch up 12-24 months after the touch up session
  If you do not come back for your touch up in time, that was given by the artist you will be charged a full price again.
  </b>
  </p>
   <h2 className="Pricing__h2__price">
 / $200 /
  </h2>
  <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
   <button id='Pricing__row1__button'>
       Book Now</button>
       </a>
  </Col>

</Row>
<Row className="Pricing__row" >
       <h2 className="Pricing__h2">
       $50 NON-REFUNDABLE BOOKING FEE IS REQUIRED TO RESERVE YOUR APPOINTMENT. THIS FEE WILL GO TOWARDS YOUR PROCEDURE PRICING.
         </h2>
       </Row>

       </div>
  )
  



}

export default Pricing;
