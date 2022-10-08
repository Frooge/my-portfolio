import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './contacts.scss';

export default function Contacts() {
  return (
    <div id="contacts" className="contacts">
        <h1 align="center">- Contact Me -</h1>
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce="true" delay="0">
          <div className="contact-form">
            <form className="row">
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
              <button type="submit" class="btn btn-warning col-3">Submit</button>
            </div>
            </form>
          </div>
        </AnimationOnScroll>
    </div>
  )
}
