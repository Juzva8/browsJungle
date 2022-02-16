import React from "react";
import Marquee from "react-fast-marquee";
import './NeedToKnow.css'

function NeedToKnow() {
    return (
        <Marquee speed="40" pauseOnHover={true}>
          <div className="NeedToKnow__row">
      <div className="col-sm-6 zero">
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-3">
        </div>
        <h1 className="NeedToKnow-name">All Procedures
        </h1>
        <div className="NeedToKnow-text">
        *a $50 non-refundable booking fee is required to reserve your appointment. ** initial procedure time ~4/5 hours.
        </div> 
        <br></br>
        <a href="https://drive.google.com/file/d/1PCWapELgGw6y9ZW7CJ5Egq-5OXbtRuGV/view" className="NeedToKnow__button">
        Learn More
        </a>
        </div>
        </div>
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-4">
        </div>
        <h1 className="NeedToKnow-name">BROWS
        </h1>
        <div className="NeedToKnow-text">The work from your initial procedure will lose ~40%-60% of the color & intensity as the skin heals.
        </div> 
        <br></br> <br></br>
        <a href="https://drive.google.com/file/d/1PCWapELgGw6y9ZW7CJ5Egq-5OXbtRuGV/view" target="_blank" className="NeedToKnow__button" tabIndex="0">Learn More
        </a>
        </div>
        </div>
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-4">
        </div>
        <h1 className="NeedToKnow-name">LIPS
        </h1>
        <div className="NeedToKnow-text">Lip blush tattoo enhances the natural shape of your lips, giving them that boost of vitality & even coloring.<br></br>
        </div> 
        <br></br>
        <a href="https://drive.google.com/file/d/1KWMuoN9QNdrOjV9QYik_ZSYMZHjWhuha/view" className="NeedToKnow__button" tabIndex="0">Learn More
        </a>
        </div>
        </div>
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-4">
        </div>
        <h1 className="NeedToKnow-name">Covid-19
        </h1>
        <div className="NeedToKnow-text">Covid-19 vaccines. We can't tattoo between the 1st & the 2nd dose of the vaccine. You need to wait 14 days after the 2nd shot.
        </div> 
        <br></br>             
        <a href="https://drive.google.com/file/d/1KWMuoN9QNdrOjV9QYik_ZSYMZHjWhuha/view" className="NeedToKnow__button" tabIndex="0">Learn More
        </a>
        </div>
        </div>
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-4">
        </div>
        <h1 className="NeedToKnow-name">BROWS
        </h1>
        <div className="NeedToKnow-text">Be prepared for the color, & intensity to be significantly sharper & darker immediately after the procedure.      
        </div> 
        <br></br> <br></br>
        <a href="https://drive.google.com/file/d/1PCWapELgGw6y9ZW7CJ5Egq-5OXbtRuGV/view" target="_blank" className="NeedToKnow__button" >Learn More
        </a>
        </div>
        </div>
        <div className="NeedToKnow-slide">
        <div className="NeedToKnow-box">
        <div className="NeedToKnow-icon-4">
        </div>
        <h1 className="NeedToKnow-name">LIPS
        </h1>
        <div className="NeedToKnow-text">After your touch up, it will again be very dark, but as it heals, it won't fade as drastically as the time before.
        </div> 
        <br></br>
        <a href="https://drive.google.com/file/d/1KWMuoN9QNdrOjV9QYik_ZSYMZHjWhuha/view" className="NeedToKnow__button" tabIndex="0">Learn More
        </a>
        </div>
        </div>
        </div>
          </div>           
          </Marquee>
          )
        }

export default NeedToKnow;
