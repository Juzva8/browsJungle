import React from 'react';
import { Row, Col } from 'reactstrap';
import './LipBlush.css'
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent'
import LipBlushing from '../../Assets/Images/Lip_blushing.png'
import blush from '../../Assets/Images/Lips.png'
import lips from '../../Assets/Images/Lip_Blush_after_procedure.png'


function LipBlush() {
  return (
    
    
    <div className="LipBlush">
    <ServicesComponent />
    <Row className="LipBlush__row" >
    <h1 className="LipBlush__h1">
    AM I A GOOD CANDIDATE FOR LIP BLUSH?
      </h1>
    </Row>
    <Row className="LipBlush__row" >
            <Col>
            <h2 className="LipBlush__h2">
            What Is Lip Blush?
      </h2>
          <p className="LipBlush__p">
          Lip Blush tattoo enhances the natural shape of your lips, giving them that boost of vitality and even coloring. 
          This is an extremely popular semi-permanent makeup treatment providing a flush of color as well as defining the contours of the lip. 
          The result will resemble a very subtle, matte, natural toned lipstick look. Most lip blush tattoos are designed to last 2 to 3 years. 
          Touch up (if needed) can be done no sooner than 6-8 weeks after the initial appointment.
          <br/>
          <br/>
          *If you are looking for a solid lipstick look, this procedure is not for you. <br /><br />
          **Lip Blush should only be done in the natural line of the lips. The skin contains pores and hair, and a completely different texture which would end in uneven healing of the pigment. <br /><br />
          *** Please disclose if you have ever had a lip blister, cold sore or any herpes outbreaks. This technique will cause a blister to form. 
          You may request a prescription from your doctor for Valtrex to prevent and outbreaks.<br /><br />
          **** Your lips may swell 2 or 3 times the normal lip size. 
          This is NORMAL. When you go home ice your lips and the swelling will go down in 1 to 3 days.
          </p>
          <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>    
          <button id='LipBlush__row1__button'>
          Book Now</button>
          </a>
        </Col>
        <Col id="LipBlush__R1__col1" xl="4">
         <img id = "LipBlush_img__body" src={LipBlushing} alt="Digital Advertising"/>
          </Col>
        </Row>
        <Row className="LipBlush__row__2" >
        <h2 className="LipBlush__h2">
        We Can't Do Lip Blush For Any Clients Who Are Or Have:
      </h2>
         </Row>
      <Row className="LipBlush__row" >
      <Col id="LipBlush__R3__col1" xl="3">
      <p className="LipBlush__p__2">
      <b id='bolding'> 1. </b>History Of Cold Sores. If You Are Prone To Cold Sores, Lip Blushing May Result In An Outbreak And Cause Loss Of Pigment. You Must Start Taking Antiviral Medication, Prescribed By Your Doctor And Not Over The Counter, 48 Hours Prior To Treatment To Prevent An Outbreak.
      <br />
      <b id='bolding'> 2. </b>Uncontrolled High Blood Pressure Or Mitral Valve Disorder.
      <br />
      <b id='bolding'> 3. </b>Had Botox In The Past 4 Weeks.
      <br />
      <b id='bolding'> 4. </b>Under 18 Years Of Age.

      </p>
      </Col>
      <Col id="LipBlush__R3__col1" xl="3">
      <p className="LipBlush__p__2">
      <b id='bolding'> 5. </b>Individuals With A Dark Lip Or Prone To Hyperpigmentation. In Some Cases, We Cannot Work Over Dark Lips Or People Prone To Hyperpigmentation. Due To The Hyper Pigmentation Getting Darker. *additional Consultation Needed!
      <br />
      <b id='bolding'> 6. </b>Transmittable Blood Conditions Like Hiv Or Hepatitis.
      <br />
      <b id='bolding'> 7. </b>Hemophiliac.
      <br />
      <b id='bolding'> 8. </b>Allergic To Anesthetic (Lidocaine), Makeup, Colors
      </p>
</Col>
<Col id="LipBlush__R3__col1" xl="3">
<p className="LipBlush__p__2">
<b id='bolding'> 9. </b>Covid-19 Vaccines. We Cannot Tattoo Between The 1st And The 2nd Dose Of The Vaccine, And You Need To Wait 14 Days After The 2nd Shot.
<br />
<b id='bolding'> 10. </b>Viral Infections And/or Diseases
<br />
<b id='bolding'> 11. </b>Sick (Cold, Flu, Covid-19, Etc.)
<br />
<b id='bolding'> 12. </b>Had An Organ Transplant
<br />
<b id='bolding'> 13. </b>Active Skin Cancer
<br />
<b id='bolding'> 14. </b>Diabetic
<br />
<b id='bolding'> 15. </b>Tendency Towards Keloids
</p>
</Col>
<Col id="LipBlush__R3__col1" xl="3">
<p className="LipBlush__p__2">
<b id='bolding'> 16. </b>Skin Irritations Or Psoriasis Near The Treated Area (Rashes, Sunburn, Acne, Etc.)
<br />
<b id='bolding'> 17. </b>Used Accutane Or Steroids In The Past Year
<br />
<b id='bolding'> 18. </b>A Pacemaker Or Major Heart Problems
<br />
<b id='bolding'> 19. </b>Used Accutane In The Past Year
<br />
<b id='bolding'> 20. </b>Seborrheic Dermatitis
<br />
<b id='bolding'> 21. </b>Healing Disorders
<br />
<b id='bolding'> 22. </b>Epilepsy
<br />
<b id='bolding'> 23. </b>Blood Thinners
<br />
<b id='bolding'> 24. </b>Pregnant Or Nursing
</p>
</Col>
    </Row>
    <Row className="LipBlush__row" >
        <Col id="LipBlush__R1__col1" xl="4">
         <img id = "LipBlush_img__body" src={blush} alt="Lake Elsinore PMU"/>
          </Col>
            <Col>
            <h2 className="LipBlush__h2">
          BEFORE THE PROCEDURE <b>(BTP*)</b>
          </h2>
          <h2 className="LipBlush__h2__1">
          Things You Should Avoid for at least 24 hours - BTP*
          </h2>
          <p className="LipBlush__p__4">
          Alcohol, caffeine, Ibuprofen/Advil, Aspirin, Vitamin E, “Hair, Skin, Nail” supplements, and fish oil supplements.          
          </p>
          <Col id="LipBlush__R2__col1" xl="6">
            <h5 className="LipBlush__h5"> <strong>1 week - BTP*</strong>
            </h5>
          <p className="LipBlush__p__3">
              Avoid sun and tanning also upper and lower lip waxing or threading.
            </p>
              <h5 className="LipBlush__h5"> <strong>Stop using 2 weeks - BTP*</strong>
            </h5>
          <p className="LipBlush__p__3">
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>  
          </Col>
          <Col id="LipBlush__R2__col2" xl="6">
      
            <h5 className="LipBlush__h5"> <strong>Stop using at least 1 month - BTP*</strong>
            </h5>
          <p className="LipBlush__p__3">
          Retinol or vitamin A products, chemical Peels, Microdermabrasion and facials.</p>
        
                <h5 className="LipBlush__h5"> <strong>Should be avoided for 1 month - BTP*</strong>
            </h5>
          <p className="LipBlush__p__3">
          Botox and filler around lip area.</p>
          </Col>

          </Col>
          </Row>

          <Row className="LipBlush__row" >
            <Col>
            <h2 className="LipBlush__h2__2">
            AFTER THE PROCEDURE
          </h2>

            <h5 className="LipBlush__h5__2"> <strong>Day 1 – 2</strong>
            </h5>
          <p className="LipBlush__p__3">
              Avoid sun and tanning also upper and lower lip waxing or threading.
</p>
                <h5 className="LipBlush__h5__2"> <strong>Day 2 – 7</strong>
            </h5>
          <p className="LipBlush__p__3">
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>
        
            <h5 className="LipBlush__h5__2"> <strong>Day 1-7 (or until the scabs are gone) Avoid:</strong>
            </h5>
          <p className="LipBlush__p__3">
          Retinol or vitamin A products, chemical Peels, Microdermabrasion and facials.</p>
          <h5 className="LipBlush__h5__2"> <strong>REMEMBER!</strong>
            </h5>
            <p className="LipBlush__p__3">
            DO NOT pick the dry lips. Do NOT apply anything besides AFTERCARE (no Vaseline, antibiotic creams, lip gloss etc.). 
            Touch up (if needed) can be done no sooner than 8 weeks after the initial appointment.</p>
            

            <h5 className="LipBlush__h5__2"> <strong>IMPORTANT!!</strong>
            </h5>
            <p className="LipBlush__p__3">
            Signs and symptoms of infection include, but are not limited to, redness, swelling, tenderness of the procedure site, 
            red streaks going from the procedure site towards the heart, elevated body temperature, or purulent drainage from the procedure site.
            Seek medical care if you experience these signs and symptoms of infection.

            </p>
          </Col>

          <Col id="LipBlush__R1__col1" xl="6">
         <img id = "LipBlush_img__body" src={lips} alt="Lake Elsinore PMU"/>
          </Col>
          </Row>
    </div>
  )
}

export default LipBlush;
