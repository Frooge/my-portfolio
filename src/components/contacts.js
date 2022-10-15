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
          <div className="contact-form">
            <form ref={form} className="row" onSubmit={sendEmail}>
            <div class="form-group col-6">
              <input type="text" class="form-control" name="name" placeholder="Name" required/>
            </div>
            <div class="form-group col-6">
              <input type="text" class="form-control" name="email" placeholder="Email" required/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
            </div>
            <div class="form-group">
              <textarea rows={10} class="form-control" name="message" placeholder="Message" required/>
            </div>
            <div class="form-group d-flex justify-content-end">
              <button type="submit" class="btn btn-warning col-3" disabled={isLoading}>Submit</button>
            </div>
            </form>
          </div>
        </AnimationOnScroll>
    </div>
  )
}
