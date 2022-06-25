import React from 'react'
import './Workshop.css'
import { Row, Col } from 'reactstrap';
import me from '../../Assets/Images/best_pmu_specialist.png'



const Workshop = () => {
  return (
    <div className="Workshop">

        <Row className="Workshop__row" >
        <Col id="Workshop__R1__col1" xl="4">
         <img id = "Workshop_img__body" src={me} alt="Corona PMU"/>
          </Col>
            <Col>
          <h1 className="Workshop__h1">
          1:1 OMBRE POWDER BROW TRAINING FOR BEGINNERS
          </h1>
          <p className="Workshop__p">
          My name is Erika, and I am excited to welcome you to Brows Jungle, LLC! I honestly believe that brows can make or break any look, 
          and my passion for what I do, combined with the desire to be the best, distinguishes me from other artists. I am a perfectionist by nature, 
          and extremely detail oriented, which as a PMU is a huge advantage. I use innovative techniques and superior products to enhance and highlight my client’s natural beauty, 
          for exceptionally gorgeous results. If you are looking for a company that makes your brows and lips satisfaction their top priority, 
          Brows Jungle, LLC is the place for you! PMU beauty salon located in Corona, California! I am looking forward to seeing you soon!
          </p>
          </Col>
          </Row>
          <Row className="Workshop__row" >
          <Col id="Workshop__R2__col1" xl="4">
          <div>
            <h5 className="Workshop__h5"> <strong>Day 1</strong>
            </h5>
            <h3 className="Workshop__h3">
            All About Theory And Practice</h3>
              <p id="Workshop__p__1"> 
              (~8 Hours)</p>
                </div>
                <h3 className="Workshop__h3">
                What Is The Best Gift You Have Been Given?</h3>
              <p id="Workshop__p__1"> 
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>
                <h3 className="Workshop__h3">
                If The Money Was No Object, What Would You Do All Day?</h3>
              <p id="Workshop__p__1"> 
              (~6 Hours)</p>
                <h3 className="Workshop__h3">
                Do you have any tattoos?</h3>
              <p id="Workshop__p__1"> 
              Yes, I Have 2 Hummingbirds On My Rib Cage. They Symbolize A New Start.</p>
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
                <h3 className="Workshop__h3">
                Powder Brows 1:1 Training With “LA Microbrow”</h3>
              <p id="Workshop__p__1"> 
              03.15.2021</p>
                <h3 className="Workshop__h3">
                Lip Blush Online Training With Shay Danielle Academy</h3>
              <p id="Workshop__p__1"> 
              08.20.2021</p>
                <h3 className="Workshop__h3">
                Lip Blush 1:1 Training With “LA Microbrow”</h3>
              <p id="Workshop__p__1"> 
              10.27.2021</p>
              {/* <a href="facetime:17472247451‬" target='_blank'>     
              <button id='Workshop__row1__button' href='/'>
              Call For Consultation</button>
              </a> */}
          </Col>
          <Col id="Workshop__R2__col1" xl="4">
          <div>
            <h5 className="Workshop__h5"> <strong>Day 3</strong>
            </h5>
            <h3 className="Workshop__h3">
            Me In Three Words</h3>
              <p id="Workshop__p__1"> 
              (~6-8 Hours)</p>
                </div>
                <h3 className="Workshop__h3">
                What Is The Best Gift You Have Been Given?</h3>
              <p id="Workshop__p__1"> 
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>
                <h3 className="Workshop__h3">
                If The Money Was No Object, What Would You Do All Day?</h3>
              <p id="Workshop__p__1"> 
              I Would Go Around The World With My Family And Still Do Permanent Makeup.</p>
                <h3 className="Workshop__h3">
                Do you have any tattoos?</h3>
              <p id="Workshop__p__1"> 
              Yes, I Have 2 Hummingbirds On My Rib Cage. They Symbolize A New Start.</p>
          </Col>
          </Row>

        
      
    </div>
  )
}
export default Workshop;