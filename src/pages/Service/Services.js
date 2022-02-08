import React from 'react'
import './Services.css'
import { Row, Col } from 'reactstrap';
import Microblading from '../../Assets/Images/Microblading_Model.png'
import PowderBrow from '../../Assets/Images/PowderBrow.png'
import lipblush from '../../Assets/Images/LipBlush_1.png'
import combo from '../../Assets/Images/Combo.png'





const Services = () => {
  return (
    <div className="Services">
        <Row className="Services__row__2" >
        <h1 id="microblading__anchor__tag" className="Services__h1">
        MICROBLADING
          </h1>
        </Row>
        <Row className="Services__row" >
            <Col>
          <p className="Services__p">
          I believe the client should have a clear vision of the direction the finished product is going prior to beginning. 
          I provide a full shaping consultation where I address all questions, concerns, 
          and goals – then I use that information to construct a customized shape based on what is achievable and complimentary to their facial structure. 
          The shape must be finalized and approved by the client before I am permitted to begin the process of Microblading.
          <br/>
          <br/>
          Once the shape has been approved and I've applied the first pass of microbladed strokes to the eyebrow I then allow the client to 
          make a final assessment on the direction its going so that I can make any necessary adjustments while the opportunity exists. 
          I value the clients opinion and believe the most satisfying outcomes are achieved through a guided process that ensures the expectations of the client are met.
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='Services__row1__button'>
              Book Now</button>
              </a>
        </Col>
        <Col id="Services__R1__col1" xl="4">
         <img id = "Services_img__body" src={Microblading} alt="Digital Advertising"/>
          </Col>
        </Row>
        <Row className="Services__row__2" >
        <h1 id="powderBrow__anchor__tag" className="Services__h1__2">
        POWDER BROWS
          </h1>
        </Row>
        <Row className="Services__row" >
           
        <Col id="Services__R1__col1" xl="4">
         <img id = "Services_img__body" src={PowderBrow} alt="Digital Advertising"/>
          </Col>
          <Col>
          <p className="Services__p">
          WHAT IS OMBRÉ BROW?
          Ombré brow is a semipermanent technique for enhancing the appearance, shape, and fullness of the eyebrows. Ombré brow, also known as
          "powdered brow" is a soft, misty, powder-filled brow similar to the look of makeup. This means the tails of the brow are darker and fade into a lighter
          color at the head of the brow, giving them a very subtle ombré appearance. Unlike microblading, these brows are typically done with a machine and
          typically last longer with more retention. Over time, pigment fades about 50% leaving your clients with amazing results. It is important to get proper
          permanent makeup ombré training when performing this procedure.
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='Services__row1__button'>
              Book Now</button>
              </a>
        </Col>
        </Row>
        <Row className="Services__row__2" >
        <h1 id="lipblush__anchor__tag" className="Services__h1">
        LIP BLUSH
          </h1>
        </Row>
        <Row className="Services__row" >
            <Col>
          <p className="Services__p">
          Lip blush enhances your lips with a healthy youthful tint. Restore lost pigmentation with a natural-looking boost of color for everyday wear without the smudge or fade!
          Lip blush provides long-lasting natural pigmented lips. This is not meant to replace wearing lipstick, 
          instead, it leaves more of a lip stain effect that keeps you looking fresh on days when you just don’t want to wear makeup. 
          We have different shades of pigments for different skin tones and preferences. Lip blush is also good for those who have scars and want them covered up. 
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='Services__row1__button'>
              Book Now</button>
              </a>
        </Col>
        <Col id="Services__R1__col1" xl="4">
         <img id = "Services_img__body" src={lipblush} alt="Digital Advertising"/>
          </Col>
        </Row>
        <Row className="Services__row__2" >
        <h1 id="combo__anchor__tag" className="Services__h1__2">
        COMBO BROWS
          </h1>
        </Row>
        <Row className="Services__row" >
           
        <Col id="Services__R1__col1" xl="4">
         <img id = "Services_img__body" src={combo} alt="Digital Advertising"/>
          </Col>
          <Col>
          <p className="Services__p">
          Combo brows is a combination of two forms of semi-permanent techniques: microblading and powder brows (shading). 
          Microblading hair-strokes are placed with a manual tool around the border of the brow to give the brow a natural look. 
          The powder effect is applied to the body of the brow using a permanent makeup device to give the brow its fullness.   
          <br/>
          <br/>
          Combo Brows are great for clients with normal to moderately oily skin. So if your skin is too oily for microblading alone, 
          combo brows might be a viable alternative. For someone with very sparse brows, the shading can give the brow more body, 
          while the hair-strokes keep it looking natural.
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='Services__row1__button'>
              Book Now</button>
              </a>
        </Col>
        </Row>
    </div>
  )
}
export default Services;