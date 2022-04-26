import React from 'react'
import './Contact.css'
import { InlineWidget } from "react-calendly";


const Contact = () => {
  return (
    <div className="contact">
          <div className="contact__Banner">
          </div>
          
          <InlineWidget url="https://calendly.com/browsjungle/4-5hours" />
        </div>
  )
}
export default Contact;