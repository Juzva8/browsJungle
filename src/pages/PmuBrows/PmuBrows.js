import React from 'react';
import { Row, Col } from 'reactstrap';
import './PmuBrows.css'
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent'
import ombre from '../../Assets/Images/PMU_Ombre.png'
import pmu from '../../Assets/Images/brows_1.png'
import brows from '../../Assets/Images/post_care.jpg'

function PmuBrows() {
  return (
    
    
    <div className="PmuBrows">
    <ServicesComponent />
    <Row className="PmuBrows__row" >
    <h1 className="PmuBrows__h1">
    Am I A Good Candidate For Brows Permanent Makeup?
      </h1>
    </Row>
    <Row className="PmuBrows__row__2" >
            <Col>
            <h2 className="PmuBrows__h2">
            WHAT IS YOUR SKIN TYPE?
      </h2>
      <h4 className="PmuBrows__h4"> 
      Microblading
      </h4>
          <p className="PmuBrows__p">
          The best candidates for microblading are people who already have their own eyebrows but want to add some shape, color or density.
          <br/>
          <br/>
          *NOT recommended for oily, or mature skin.
          </p>
          <h4 className="PmuBrows__h4"> 
          Powder Brows
      </h4>
          <p className="PmuBrows__p">
          Powder brows can be done as light as a brow tint or as dark as glam. Recommended for those who want a completely "filled in" brow!
          <br/>
          <br/>
          *Best for ALL skin types.
          </p>
          <h4 className="PmuBrows__h4"> 
          Microblading + Shading (Combo)
      </h4>
          <p className="PmuBrows__p">
          This technique offers the best of both powdered and hair stroke effects combined together to achieve a fluffy, textured, yet defined brow.
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='PmuBrows__row1__button'>
          Book Now</button>
          </a>
        </Col>
        <Col id="PmuBrows__R1__col1" xl="4">
         <img id = "PmuBrows_img__body" src={ombre} alt="Digital Advertising"/>
          </Col>
        </Row>
        <Row className="PmuBrows__row" >
        <h2 className="PmuBrows__h2">
        We Can't Do Pmu For Any Clients Who Are Or Have:
      </h2>
         </Row>
      <Row className="PmuBrows__row" >
      
      <Col id="PmuBrows__R3__col1" xl="3">
      <p className="PmuBrows__p__2">
      <b id='bolding'> 1. </b>Had Botox in the past 3 months
      <br />
      <b id='bolding'> 2. </b>Used Accutane in the past year
      <br />
      <b id='bolding'> 3. </b>Tendency towards keloids
      <br />
      <b id='bolding'> 4. </b>Had an Organ transplant
      <br />
      <b id='bolding'> 5. </b>Diabetic
      </p>
</Col>
<Col id="PmuBrows__R3__col1" xl="3">
      <p className="PmuBrows__p__2">
      <b id='bolding'> 6. </b>COVID-19 vaccines. We cannot tattoo between the 1st and the 2nd dose of the vaccine and you need to wait 14 days after the 2nd shot.
      <br />
      <b id='bolding'> 7. </b>Seborrheic dermatitis
      <br />
      <b id='bolding'> 8. </b>Pregnant or Nursing
      <br />
      <b id='bolding'> 9. </b>Under 18 Years Of Age.

      </p>
      </Col>
<Col id="PmuBrows__R3__col1" xl="3">
<p className="PmuBrows__p__2">
<b id='bolding'> 10. </b>Allergic to anesthetic (Lidocaine)
<br />
<b id='bolding'> 11. </b>Viral infections and/or diseases
<br />
<b id='bolding'> 12. </b>Sick (cold, flu, COVID-19, etc.)
<br />
<b id='bolding'> 13. </b>A Pacemaker or major heart problems
<br />
<b id='bolding'> 14. </b>Epilepsy
</p>
</Col>
    </Row>
    <Row className="PmuBrows__row" >
        <Col id="PmuBrows__R1__col1" xl="4">
         <img id = "PmuBrows_img__body" src={pmu} alt="Corona PMU"/>
          </Col>
            <Col>
            <h2 className="PmuBrows__h2">
          BEFORE THE PROCEDURE <b>(BTP*)</b>
          </h2>
          <h2 className="PmuBrows__h2__1">
          Things You Should Avoid for at least 24 hours - BTP*
          </h2>
          <p className="PmuBrows__p__4">
          Alcohol, caffeine, Ibuprofen/Advil, Aspirin, Vitamin E, “Hair, Skin, Nail” supplements, and fish oil supplements.
          </p>
          <Col id="PmuBrows__R2__col1" xl="6">
        
            <h5 className="PmuBrows__h5"> <strong>1 week - BTP*</strong>
            </h5>
          <p className="PmuBrows__p__3">
          Avoid sun and tanning also brow waxing, tinting, or threading.
</p>
                <h5 className="PmuBrows__h5"> <strong>Stop using 2 weeks - BTP*</strong>
            </h5>
          <p className="PmuBrows__p__3">
          Alpha Hydroxy Acid (AHA) products close to the eyebrow area</p>
             
          </Col>
          <Col id="PmuBrows__R2__col2" xl="6">
        
            <h5 className="PmuBrows__h5"> <strong>Stop using at least 1 month - BTP*</strong>
            </h5>
          <p className="PmuBrows__p__3">
          Retinol or vitamin A products, chemical Peels, Microdermabrasion and facials.</p>
        
                <h5 className="PmuBrows__h5"> <strong>Should be avoided for 3 months - BTP*</strong>
            </h5>
          <p className="PmuBrows__p__3">
          Botox and filler on the forehead, temple, and eye area.</p>
          </Col>

          </Col>
          </Row>

          <Row className="PmuBrows__row" >
            <Col>
            <h2 className="PmuBrows__h2__2">
            AFTER THE PROCEDURE
          </h2>

            <h5 className="PmuBrows__h5__2"> <strong>Day 1 – 2</strong>
            </h5>
          <p className="PmuBrows__p__3">
              Avoid sun and tanning also upper and lower lip waxing or threading.
</p>
                <h5 className="PmuBrows__h5__2"> <strong>Day 2 – 7</strong>
            </h5>
          <p className="PmuBrows__p__3">
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>
        
            <h5 className="PmuBrows__h5__2"> <strong>Day 1-7 (or until the scabs are gone) Avoid:</strong>
            </h5>
          <p className="PmuBrows__p__3">
          Retinol or vitamin A products, chemical Peels, Microdermabrasion and facials.</p>
          <h5 className="PmuBrows__h5__2"> <strong>REMEMBER!</strong>
            </h5>
            <p className="PmuBrows__p__3">
            DO NOT pick the dry lips. Do NOT apply anything besides AFTERCARE (no Vaseline, antibiotic creams, lip gloss etc.). 
            Touch up (if needed) can be done no sooner than 8 weeks after the initial appointment.</p>
            

            <h5 className="PmuBrows__h5__2"> <strong>IMPORTANT!!</strong>
            </h5>
            <p className="PmuBrows__p__3">
            Signs and symptoms of infection include, but are not limited to, redness, swelling, tenderness of the procedure site, 
            red streaks going from the procedure site towards the heart, elevated body temperature, or purulent drainage from the procedure site.
            Seek medical care if you experience these signs and symptoms of infection.

            </p>
          </Col>

          <Col id="PmuBrows__R1__col1" xl="6">
         <img id = "PmuBrows_img__body__2" src={brows} alt="Corona PMU"/>
          </Col>
          </Row>
    </div>
  )
}



export default PmuBrows;
