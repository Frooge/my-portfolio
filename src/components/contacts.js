import React, { useState, useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import emailjs from '@emailjs/browser';


import './contacts.scss';

export default function Contacts() {
  const [isLoading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_ssovj9f', 'template_2l7t8dr', form.current, 'DHgBy285xZxFafVKH')
      .then(() => {
          alert('Message successfully sent!');
          setLoading(false);
      }, () => {
        alert('Failed to send message.');
        setLoading(false);
      });
  };

  return (
    <div id="contacts" className="contacts">
        <h1 align="center">Contact Me</h1>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="0">
          <div className="contact-modal row">
            
            <div className="contact-form col-md-8  order-md-2">
              <form ref={form} className="row" onSubmit={sendEmail}>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="name" placeholder="Name" required/>
              </div>
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="email" placeholder="Email" required/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group">
                <textarea rows={10} className="form-control" name="message" placeholder="Message" required/>
              </div>
              <div className="form-group d-flex justify-content-end">
                <button type="submit" className="btn btn-warning col-md-3" disabled={isLoading}>Submit</button>
              </div>
              </form>
            </div>
            <div className="contact-details col-md-4 order-md-1">
              <h2>Contact Info</h2>
              <ul>
                <li>Email: <u>jaantaros@gmail.com</u></li>
                <li>LinkedIn: <u>Jade Andrie Rosales</u></li>
                <li>Discord: <u>Nter#7661</u></li>
                <li>Facebook: <u>Jade Rosales</u></li>
                <li>Twitter: <u>N/A</u></li>
                <li>Instagram: <u>N/A</u></li>
                <li>Phone#: <u>N/A</u></li>
              </ul>
            </div>
            
          </div>
          
        </AnimationOnScroll>
    </div>
  )
}
