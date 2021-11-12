import React from 'react'
import Navibar from '../components/Navibar'
import '../styles/style.css'
import * as Icons from 'react-bootstrap-icons'
export default function Contact() {
   
        return (
           
                
   
    <>
    <Navibar/>
    <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="info-box">
                                        <i className="bx bx-map" > <Icons.Map/></i>
                                        <h3>Our Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-envelope"><Icons.Envelope/></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br /></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-phone-call"><Icons.Telephone/></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br /></p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <form  className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section><section className="map mt-2">
                    <div className="container-fluid p-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.071218229993!2d24.020492876617606!3d49.84111933790114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add717532cff9%3A0x1ea627f45b408179!2z0JvRjNCy0ZbQstGB0YzQutC40Lkg0L3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGD0L3RltCy0LXRgNGB0LjRgtC10YIg0ZbQvNC10L3RliDQhtCy0LDQvdCwINCk0YDQsNC90LrQsA!5e0!3m2!1suk!2sua!4v1636473718100!5m2!1suk!2sua" allowFullScreen loading="lazy"></iframe>
                    </div>
                </section></>


        )
    
}
