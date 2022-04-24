import React from 'react'
import './About.css'
import { Row, Col } from 'reactstrap';
import me from '../../Assets/Images/best_pmu_specialist.png'



const About = () => {
  return (
    <div className="About">

        <Row className="About__row" >
        <Col id="About__R1__col1" xl="4">
         <img id = "About_img__body" src={me} alt="Corona PMU"/>
          </Col>
            <Col>
          <h1 className="About__h1">
          DEAR CLIENTS AND FRIENDS
          </h1>
          <p className="About__p">
          My name is Erika, and I am excited to welcome you to Brows Jungle, LLC! I honestly believe that brows can make or break any look, 
          and my passion for what I do, combined with the desire to be the best, distinguishes me from other artists. I am a perfectionist by nature, 
          and extremely detail oriented, which as a PMU is a huge advantage. I use innovative techniques and superior products to enhance and highlight my client’s natural beauty, 
          for exceptionally gorgeous results. If you are looking for a company that makes your brows and lips satisfaction their top priority, 
          Brows Jungle, LLC is the place for you! PMU beauty salon located in Corona, California! I am looking forward to seeing you soon!
          </p>
       
          <Col id="About__R2__col1" xl="6">
          <div>
            <h5 className="About__h5"> <strong>Q & A</strong>
            </h5>
            <h3 className="About__h3">
            Me In Three Words</h3>
              <p id="About__p__1"> 
              Honest. Perfectionist. Ambitious.</p>
                </div>
                <h3 className="About__h3">
                What Is The Best Gift You Have Been Given?</h3>
              <p id="About__p__1"> 
              10 Years Ago, My Husband Bought Me A Dog. This Is The Only Gift That Matters.</p>
                <h3 className="About__h3">
                If The Money Was No Object, What Would You Do All Day?</h3>
              <p id="About__p__1"> 
              I Would Go Around The World With My Family And Still Do Permanent Makeup.</p>
                <h3 className="About__h3">
                Do you have any tattoos?</h3>
              <p id="About__p__1"> 
              Yes, I Have 2 Hummingbirds On My Rib Cage. They Symbolize A New Start.</p>
          </Col>
          <Col id="About__R2__col2" xl="6">
          <div>
            <h5 className="About__h5"> <strong>Education</strong>
            </h5>
            <h3 className="About__h3">
            Microblading 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              11.09.2020</p>
                </div>
                <h3 className="About__h3">
                Powder Brows 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              03.15.2021</p>
                <h3 className="About__h3">
                Lip Blush Online Training With Shay Danielle Academy</h3>
              <p id="About__p__1"> 
              08.20.2021</p>
                <h3 className="About__h3">
                Lip Blush 1:1 Training With “LA Microbrow”</h3>
              <p id="About__p__1"> 
              10.27.2021</p>
              <a href='https://calendly.com/browsjungle/5hours?month=2022-02' target='_blank'>     
              <button id='About__row1__button' href='/'>
              Book Now</button>
              </a>
          </Col>

          </Col>
          </Row>
      
    </div>
  )
}
export default About;