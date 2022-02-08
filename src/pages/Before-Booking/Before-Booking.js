import React from 'react'
import { Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import './Before-Booking.css'
import me from '../../Assets/Images/brows_1.png'


const BeforeBooking = () => {
  return (
    <div className="BeforeBooking">
        <Row className="BeforeBooking__row" >
        <Col id="BeforeBooking__R1__col1" xl="4">
         <img id = "BeforeBooking_img__body" src={me} alt="Lake Elsinore PMU"/>
          </Col>
            <Col>
          <h1 className="BeforeBooking__h1">
          3 STEPS BEFORE BOOKING
          </h1>
          <p className="BeforeBooking__p">
          Submit a $50 non-refundable booking fee to reserve your appointment. This fee will go towards your procedure pricing.
          Please send it using Zelle at browsjungle@gmail.Com If payment is not received within 1-hour booking will be canceled.
          <br />
          <br />
          Aproval is required prior to booking. All clients must provide the following information prior to booking their service:
          Full name Clear photo of the whole face (no filters) ‍Please text the required info at (747) 224-7451‬ or DM on IG: @browsjungle
          <br />
          <br />
          <span id="emphasis-1"><b>Read Consent Forms Bellow:</b></span>           
          </p>
          <Col id="BeforeBooking__R2__col1" xl="6">

                <Button href="https://drive.google.com/file/d/1PCWapELgGw6y9ZW7CJ5Egq-5OXbtRuGV/view?usp=sharing" target="_blank" size="lg" block>Before The Procedure BROWS (pdf)</Button> 
                <Button href="https://drive.google.com/file/d/1KWMuoN9QNdrOjV9QYik_ZSYMZHjWhuha/view?usp=sharing" target="_blank" size="lg" block>Before The Procedure LIPS (pdf)</Button>
                <Button href="https://drive.google.com/file/d/1W1e-_ym4Mx2L0ssPBPuwYiJ96S9eXSyH/view?usp=sharing" target="_blank" size="lg" block>Main Consent Form (pdf)</Button>
                <Button href="https://drive.google.com/file/d/1zakpDsnXHZea6ff756unhtNfN9_gqFgC/view?usp=sharing" target="_blank" size="lg" block>Medical Consent and Procedure Chart (pdf)</Button>
          </Col>
          <Col id="BeforeBooking__R2__col2" xl="6">
          <div>
     
                <Button href="https://drive.google.com/file/d/1WJ-F8_RmXtsWZUT6AdklEnjIo1xBcyai/view?usp=sharing" target="_blank" size="lg" block>Photo and Liability Release Form (pdf)</Button>
                </div>
                <Button href="https://drive.google.com/file/d/1YyXYIGB8Gj8W93LorYz2U_iUWPjWe-PK/view?usp=sharing" target="_blank"  size="lg" block>After The Procedure BROWS (pdf)</Button>
                <Button href="https://drive.google.com/file/d/14D0Ew3CIESUeUnbaINS6scU3KIh9at-F/view?usp=sharing" target="_blank"  size="lg" block>After The Procedure LIPS (pdf)</Button>
                <Button href="https://drive.google.com/file/d/1zlDWps3F8cAqVegLOA_-DhpVQEZ_FkFe/view?usp=sharing" target="_blank" size="lg" block>Procedure Report (pdf)</Button>
          </Col>

          </Col>
          </Row>
      
    </div>
  )
}
export default BeforeBooking;