import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <>

<div className="text__area">
        <div className="container ">
            <div className="text">
                <h2>Contact</h2>
                <p>We not only help you design exceptional products, but also make it easy for you to share your designs with more like-minded people.</p>
            </div>
        </div>
      </div>



      <div className="contact__container">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className='contact__title'>Get in Touch</h2>
                </div>
                <div className="col-lg-8 mb-4">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form__container">
                                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form__container">
                                    <input type="text" placeholder='Enter Your Name' />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form__container">
                                    <input type="email" placeholder='Enter Your Email Address' />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form__container">
                                    <input type="text" placeholder='Enter Your Subject'/>
                                </div>
                            </div>
                            <div className="form__container mt-3">
                                <button type='submit'>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="contact__info">
                        <span><i class = "lni lni-home"></i></span>
                        <div className="contact__info__title">
                            <h3>Buttonwood, California.</h3>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className="contact__info">
                        <span><i class = "bi bi-phone"></i></span>
                        <div className="contact__info__title">
                            <h3>00 (440) 9865 562</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className="contact__info">
                        <span><i class = "gg-mail"></i></span>
                        <div className="contact__info__title">
                            <h3>support@eiser.com</h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
