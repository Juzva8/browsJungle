import React from 'react'
import './Contact.css'
import { InlineWidget } from "react-calendly";


const Contact = () => {
  return (
    <div className="contact">
          <div className="contact__Banner">
          </div>
          
          <InlineWidget url="https://calendly.com/browsjungle/5hours?month=2021-10&date=2021-10-15" />
        </div>
  )
}
export default Contact;